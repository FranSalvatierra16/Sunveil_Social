import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import server from '../helpers/axios';
import { MMKVLoader, useMMKVStorage, MMKV } from 'react-native-mmkv-storage';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
// Create unlimited Database instances
// You can create many database instances. This helps greatly if you have separate logics/modules in the same app that use data differently, It also helps in better performance since each database instance is small instead of a single bulky database which makes things slower as it grows.
// const userStorage = new MMKVLoader().withEncryption().withInstanceID('userdata').initialize();
// const settingsStorage = new MMKVLoader().withInstanceID('settings').initialize();

const userStorage = new MMKVLoader().withInstanceID('userdata').initialize();
const tokenStorage = new MMKVLoader().withInstanceID('token').initialize();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handleInputsChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: value }))
  }
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const user_ = await userStorage.getStringAsync('user');
        const token_ = await tokenStorage.getStringAsync('token');
        if (!user_ || !token_) return setLoading(false);
        setUser(user_);
        setToken(token_);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    bootstrapAsync();
  }, []);

  async function login(email, password) {
    setLoading(true);
    try {
      const res = await server.post('/api/users/login', { email, password });
      if (res.status !== 200) return false;
      const { user, token } = res.data;
      await userStorage.setStringAsync('user', JSON.stringify(user));
      await tokenStorage.setStringAsync('token', token);
      setUser(user);
      setToken(token);
      setLoading(false);
      return true
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false
    }
  }
  async function register(data) {
    setLoading(true);
    console.log('registering', data);
    try {
      const res = await server.post('/api/users', { email, password, username } = data);
      if (res.status !== 201) return false;
      const { user } = res.data;
      console.log('user', user);
      setLoading(false);
      return true
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false
    }
  }

  async function logout() {
    setLoading(true);
    try {
      // userStorage.removeItem('user');
      // tokenStorage.removeItem('token');
      // setUser('');
      // setToken('');
      // setLoading(false);
      // return true;
      userStorage.removeItem('user');
      tokenStorage.removeItem('token');
      setUser(null);
      setToken(null);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, register, width: Dimensions.get('window').width, height: Dimensions.get('window').height, inputs, setInputs, handleInputsChange }}>
      {children}
    </AuthContext.Provider>
  );
};