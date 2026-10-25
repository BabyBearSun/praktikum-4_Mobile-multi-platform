# Praktikum 4 — Props dan State
## Diary App (Buku Harian)

### Identitas Mahasiswa
- **Nama:** Salwa Salsa Nabilah
- **NIM:** 2430511021
- **Mata Kuliah:** Mobile Multi-Platform

### Deskripsi Aplikasi
Diary App merupakan aplikasi buku harian sederhana yang dikembangkan menggunakan React Native dengan Expo. Aplikasi ini memungkinkan pengguna menambahkan catatan harian, mencari catatan berdasarkan kata kunci, memberikan tanda suka, dan melihat detail catatan melalui modal.

### Fitur Aplikasi
1. **Menampilkan Catatan:** Menampilkan daftar catatan harian dalam bentuk kartu.
2. **Menambahkan Catatan:** Pengguna dapat menambahkan catatan baru melalui formulir dengan mengisi judul, tanggal, dan cerita.
3. **Pencarian Catatan:** Pengguna dapat mencari catatan berdasarkan kata kunci.
4. **Like Catatan:** Pengguna dapat memberikan atau membatalkan tanda suka pada catatan.
5. **Detail Catatan:** Pengguna dapat membuka modal untuk melihat detail catatan dan gambar suasana hati.

### Teknologi yang Digunakan
- React Native
- Expo
- JavaScript
- React Hooks (`useState`)

### Cara Menjalankan Project

**1. Persiapan**

Pastikan Node.js sudah terpasang di komputer. Kemudian, unduh atau clone repository dan buka folder project melalui terminal.

**2. Instalasi Dependensi**

Jalankan perintah berikut:

```bash
npm install
```

**3. Menjalankan Aplikasi**

Jalankan perintah:

```bash
npx expo start
```

Jika menggunakan Windows PowerShell dan perintah `npx` tidak berjalan, gunakan:

```powershell
npx.cmd expo start
```

Setelah Expo berjalan, pindai QR code menggunakan Expo Go atau tekan tombol yang sesuai di terminal untuk membuka aplikasi pada emulator atau browser.

### Penerapan Props dan State

#### 1. Props
Props digunakan untuk mengirimkan data dan fungsi dari komponen induk ke komponen anak. Dalam aplikasi ini, props digunakan untuk mengirimkan informasi catatan ke komponen `DiaryCard`, seperti judul, tanggal, cerita, gambar, dan status suka. Props juga digunakan untuk meneruskan fungsi seperti membuka detail catatan dan mengubah status suka.

#### 2. State
State digunakan untuk menyimpan dan mengelola data yang dapat berubah ketika pengguna berinteraksi dengan aplikasi. Pengelolaan state dilakukan menggunakan React Hooks, khususnya `useState`.

Penerapan state dalam aplikasi ini meliputi:
- **Daftar catatan (`entries`):** Menyimpan catatan harian dan diperbarui ketika pengguna menambahkan catatan baru.
- **Kata kunci pencarian (`query`):** Menyimpan teks pencarian untuk menyaring daftar catatan.
- **Status suka (`likedIds`):** Menyimpan identitas catatan yang disukai pengguna.
- **Catatan terpilih (`selected`):** Menentukan catatan yang ditampilkan pada modal detail.
- **Data formulir:** Menyimpan input pengguna ketika mengisi formulir catatan baru.

Perubahan state menyebabkan komponen terkait diperbarui sehingga tampilan aplikasi menyesuaikan dengan data terbaru.

### Kesimpulan
Melalui pengembangan Diary App, konsep Props dan State diterapkan untuk mengelola komunikasi antarkomponen, menyimpan data, serta menangani interaksi pengguna secara dinamis. Aplikasi ini menjadi penerapan dasar pengembangan aplikasi mobile menggunakan React Native dan Expo.