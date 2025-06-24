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

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 导航栏滚动效果
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-glass', 'shadow-md');
    } else {
      navbar.classList.remove('bg-glass', 'shadow-md');
    }
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // 初始化图表
  if (typeof Chart !== 'undefined') {
    const ctx = document.getElementById('activityChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
          datasets: [{
            label: '活动数量',
            data: [12, 19, 15, 25, 22, 30],
            borderColor: '#165DFF',
            backgroundColor: 'rgba(22, 93, 255, 0.1)',
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }

  // 活动卡片悬停效果
  const cards = document.querySelectorAll('.activity-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('shadow-hover', 'scale-105');
    });
    card.addEventListener('mouseleave', function() {
      this.classList.remove('shadow-hover', 'scale-105');
    });
  });
});
