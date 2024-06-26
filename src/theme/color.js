export const Colors = {
    primary: '#F78361',
    primary1: '#F54B64',
    active: '#000000',
    // disable:'#9E9E9E',
    secondary: '#393939',
    lable: '#9D9D9D',
    disable: '#4E586E',
    disable1: '#333A4D',
    border: '#E0E0E0',
    btntxt: '#FEFEFE',
    input: '#FFFFFF20',
    bg: '#FFFFFF',
    search: '#8E8E9330',
    bg1: '#1E2432',
    bg2: '#00000020',
    txt: '#0A1F44',
    textwhite: '#FEFEFE',
    textdark: '#1F242E',
    icon: '#BDC1C6',
    textdark1: '#F8F9FA',
    textdark2: '#50555F',
    subt: '#0E1013',
    solDefault: '#8E8E8E',
    sol1: '#13AAFF',
    sol2: '#FF9B25',
    sol3: '#A4DD48',
    background: '#FFFFFF'
}

export const randomColors = () => {
    let colors = ["#FFD700",];
    let color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

