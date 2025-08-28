# Poling Kelompok Manajemen Kompensasi

Website interaktif untuk pembagian kelompok otomatis mata kuliah Manajemen Kompensasi dengan efek visual 3D menggunakan Three.js.

## ✨ Fitur

- 🎯 **Pembagian Otomatis**: Algoritma pembagian kelompok yang adil berdasarkan gender
- 👥 **7 Kelompok**: Pembagian menjadi 7 kelompok dengan distribusi 7-7-7-6-6-6-6 anggota
- ⚖️ **Distribusi Adil**: Gender distribution yang seimbang (25 perempuan, 20 laki-laki)
- 🎮 **Interaktif**: Tombol untuk mengacak ulang pembagian kelompok
- 🎨 **3D Effects**: Efek visual 3D menggunakan Three.js dengan partikel animasi
- 📱 **Responsive**: Tampilan yang optimal di semua perangkat
- ⚡ **Fast Loading**: Optimized untuk performa yang cepat

## 📊 Data Mahasiswa

Total: **45 Mahasiswa**
- 👩 **25 Perempuan**
- 👨 **20 Laki-laki**

### Distribusi Per Kelompok:
- Kelompok 1-3: 7 anggota each
- Kelompok 4-7: 6 anggota each

## 🚀 Deploy ke Vercel

### Metode 1: Deploy via Git Repository

1. **Fork atau Clone Repository ini**
   ```bash
   git clone https://github.com/your-username/Poling-Kelompok-Manajemen-Kompensasi.git
   cd Poling-Kelompok-Manajemen-Kompensasi
   ```

2. **Push ke GitHub Repository Anda**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Deploy ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Klik "Sign up" atau "Log in" dengan akun GitHub
   - Klik "New Project"
   - Import repository GitHub Anda
   - Klik "Deploy"

### Metode 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Project**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Project name: `poling-kelompok-manajemen-kompensasi`
   - Directory: `./` (current directory)
   - Deployment settings: Use default

### Metode 3: Deploy via Drag & Drop

1. **Zip semua files** (kecuali `node_modules` dan `.git`)
2. **Kunjungi [vercel.com](https://vercel.com)**
3. **Drag & drop** file zip ke Vercel dashboard
4. **Tunggu proses deployment**

## 🛠️ Development Local

### Prerequisites
- Node.js (untuk package management)
- Python 3 (untuk local server)
- Web browser modern

### Setup Local Development

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/Poling-Kelompok-Manajemen-Kompensasi.git
   cd Poling-Kelompok-Manajemen-Kompensasi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run local server**
   ```bash
   # Menggunakan Python
   python3 -m http.server 3000
   
   # Atau menggunakan npm script
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

## 📁 Struktur Project

```
Poling-Kelompok-Manajemen-Kompensasi/
├── index.html          # Main HTML file
├── style.css           # Stylesheet dengan animasi dan effects
├── script.js           # Main JavaScript dengan algoritma dan Three.js
├── package.json        # NPM dependencies
├── vercel.json         # Vercel deployment config
├── README.md           # Documentation
└── Nama_dan_Jenis_Kelamin.md  # Data mahasiswa
```

## 🎯 Cara Kerja Algoritma

### Pembagian Kelompok:
1. **Pemisahan Gender**: Memisahkan mahasiswa berdasarkan gender
2. **Shuffle Random**: Mengacak urutan untuk fairness
3. **Distribusi Bertahap**: 
   - Distribusikan laki-laki secara merata (20 ÷ 7 ≈ 3 per kelompok)
   - Distribusikan perempuan secara merata (25 ÷ 7 ≈ 3-4 per kelompok)
4. **Pengisian Sisa Slot**: Mengisi slot yang tersisa secara acak

### Formula Distribusi:
- **Target per kelompok**: `Math.floor(total_gender / 7) + (remainder > group_index ? 1 : 0)`
- **Distribusi Laki-laki**: 3-3-3-3-3-3-2 atau variasi serupa
- **Distribusi Perempuan**: 4-4-4-3-3-3-4 atau variasi serupa

## 🎨 Fitur Visual

### Efek 3D:
- ✨ **Partikel Animasi**: 100+ partikel bergerak dengan Three.js
- 🔄 **Rotasi Otomatis**: Partikel berputar secara smooth
- 🎭 **Mode Toggle**: Beralih antara mode normal dan enhanced 3D
- 🌈 **Color Gradients**: Gradient backgrounds yang menarik
- 💫 **Hover Effects**: Animasi saat hover pada kartu kelompok

### Responsive Design:
- 📱 Mobile-first approach
- 🖥️ Desktop optimized
- 📐 Flexible grid layout
- ⚡ Smooth transitions

## 🔧 Customization

### Mengubah Jumlah Kelompok:
Edit variabel `groupSizes` di `script.js`:
```javascript
const groupSizes = [7, 7, 7, 6, 6, 6, 6]; // Ubah sesuai kebutuhan
```

### Mengubah Data Mahasiswa:
Edit array `students` di `script.js` atau import dari file eksternal.

### Mengubah Tema Visual:
Edit CSS custom properties di `style.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #ff6b6b;
}
```

## 🐛 Troubleshooting

### Deployment Issues:
1. **Build Error**: Pastikan `vercel.json` ada dan formatted dengan benar
2. **Static Files**: Pastikan semua files (HTML, CSS, JS) accessible
3. **Dependencies**: Check `package.json` untuk dependencies yang valid

### Local Development Issues:
1. **Port Conflict**: Ganti port di command: `python3 -m http.server 8080`
2. **CORS Issues**: Gunakan local server, jangan buka file langsung di browser
3. **Three.js Errors**: Pastikan internet connection untuk CDN loading

## 📈 Performance Tips

- 🚀 **Lazy Loading**: Images dan resources di-load saat dibutuhkan
- ⚡ **Efficient Rendering**: Three.js particle system dioptimasi
- 📦 **Minified Assets**: CSS dan JS sudah optimized
- 🎯 **Smart Animations**: Menggunakan requestAnimationFrame untuk smooth animation

## 🤝 Contributing

Kontribusi sangat welcome! Silakan:
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - silakan gunakan dan modifikasi sesuai kebutuhan.

## 📞 Support

Jika ada pertanyaan atau issues:
1. Create GitHub issue
2. Check troubleshooting section
3. Review Vercel documentation

---

**Happy Coding! 🎉**

*Website ini dibuat dengan ❤️ untuk mata kuliah Manajemen Kompensasi*