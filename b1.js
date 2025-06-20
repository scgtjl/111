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
document.addEventListener('DOMContentLoaded', function() {
  // 可以在这里添加其他初始化代码，如Chart.js图表初始化
  // 示例：如果页面中有图表，可以在这里初始化
  // const ctx = document.getElementById('activityChart');
  // if (ctx) {
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
  //       datasets: [{
  //         label: '活动数量',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: 'rgba(22, 93, 255, 0.6)',
  //         borderColor: '#165DFF',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false
  //     }
  //   });
  // }
});
    
