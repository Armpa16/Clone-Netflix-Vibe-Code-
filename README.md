# Netflix Clone Vibe Code

🎬 **Netflix Clone สุดยอดด้วย React + Vite**

โปรเจคนี้พัฒนาซ้อง Netflix ด้วย UI ที่สวยงามและทันสมัย พร้อมฟีเจอร์ที่ครบครบน

## ✨ **ฟีเจอร์หลัก**

### 🎨 **UI/UX ที่ปรับปรุง**
- **Hover Effects**: การ์ดหนังมี hover effect ที่สวยงาม
  - รูปภาพเบลอค่อยๆ (blur + brightness)
  - การ์ดขยายและแสดงข้อมูลภาพยนอน
  - ปุ่ม Play และ Add to List พร้อม animation
  - Transition ที่ลื่นไหลและนุ่มนวล

### 🎮 **การเลื่อน**
- **ปุ่มนำทาง**: ปุ่มซ้าย-ขวา สำหรับเลื่อนดูหนังในแต่ละหมวด
- **Smooth Scrolling**: เลื่อนแบบนุ่มนวล (smooth behavior)
- **Auto-boundary**: ไม่เลื่อนเกินขอบข้อมูล
- **Responsive**: ทำงานได้ดีในทุกขนาด

### 🎭 **Visual Effects**
- **Glassmorphism**: ปุ่มและ overlay มี effect กระจก
- **Shadow Effects**: การ์ดและปุ่มมีเงาที่สวยงาม
- **Gradient Overlays**: การเปลี่ยนสีแบบ gradient บนรูปภาพ
- **Transform Animations**: การขยายและเคลื่อนแบบ 3D

## 🛠️ **เทคโนโลยีที่ใช้**

### **Frontend**
- **React 18** - UI Library สำหรับการสร้าง Component
- **Vite** - Build Tool ที่เร็วและ Modern
- **Tailwind CSS** - CSS Framework สำหรับการออกแบบ Responsive
- **JavaScript ES6+** - Modern JavaScript Features

### **Features**
- **Component-based Architecture** - แยกส่วน Component ต่างๆ
- **Custom Hooks** - ใช้ useState, useRef สำหรับ State Management
- **Responsive Design** - รองรับทุกขนาดจอภาพ
- **Smooth Animations** - CSS Transitions และ Transforms
- **Modern CSS** - Backdrop filters, gradients, shadows

## 📁 **โครงสร้าง**

```
src/
├── components/
│   ├── Navbar.jsx      # แถบนำทางพร้อม search และ user menu
│   ├── Hero.jsx        # หน้าแรกสุดด้วย backdrop และ CTA buttons
│   ├── Row.jsx          # แถวแสดงหนังแนวนอน
│   └── Footer.jsx       # ส่วนท้ายพร้อม links และ social media
├── data/
│   └── mockData.js    # ข้อมูลตัวอย่างหนังและ categories
├── index.css           # Custom CSS สำหรับ animations และ effects
├── App.jsx             # Main Application Component
└── main.jsx            # Entry Point
```

## 🚀 **การติดตั้งและรัน**

```bash
# Clone repository
git clone https://github.com/Armpa16/Clone-Netflix-Vibe-Code-.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 **ฟีเจอร์พิเศษ**

### **Movie Cards**
- Hover แล้วแสดง overlay ข้อมูล
- ปุ่ม Play และ Add พร้อม icon
- Rating match percentage แบบ dynamic
- ปรับเปลี่ยนขนาดของรูปภาพ

### **Navigation**
- ปุ่มซ้าย-ขวา สำหรับแต่ละหมวด
- Smooth scrolling ด้วย JavaScript API
- Auto-hide ปุ่มเมื่อไม่ hover
- Glassmorphism effect บนปุ่ม

### **Responsive**
- Mobile: 160px width
- Tablet: 200px width  
- Desktop: 240px width
- Large: 280px width

## 🎨 **Custom CSS Classes**

### **Movie Card Hover**
```css
.movie-card:hover {
  transform: scale(1.05);
  z-index: 20;
  filter: brightness(1.1);
}

.movie-card:hover img {
  transform: scale(1.1);
  filter: brightness(0.5) blur(4px);
}
```

### **Navigation Buttons**
```css
.nav-button {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
```

## 📱 **Responsive Breakpoints**

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: 1024px - 1536px
- **Large**: > 1536px

## 🌟 **Highlight Features**

- ✅ **Real Movie Data** - ใช้ข้อมูลหนังจริงจาก TMDB
- ✅ **Smooth Animations** - Transition ที่ลื่นไหลทั้งหมด
- ✅ **Modern UI** - Glassmorphism, gradients, shadows
- ✅ **Full Responsive** - ทำงานได้ดีในทุกอุปกรณ์
- ✅ **Interactive Elements** - Hover states, click handlers
- ✅ **Performance Optimized** - Lazy loading และ efficient rendering

## 🎬 **Demo**

[![Netflix Clone Demo](https://clonevibecode.netlify.app/)]

