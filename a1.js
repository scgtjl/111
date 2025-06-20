// Tailwind配置
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#165DFF',
                secondary: '#36BFFA',
                accent: '#FF7D00',
                success: '#00B42A',
                warning: '#FF7D00',
                danger: '#F53F3F',
                dark: '#1D2129',
                'dark-2': '#4E5969',
                'light-1': '#F2F3F5',
                'light-2': '#E5E6EB',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
            }
        },
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {});
