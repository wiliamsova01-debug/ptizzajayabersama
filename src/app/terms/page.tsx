'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, ArrowLeft, FileText, Users, Hammer, AlertTriangle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT IZZA SUMBER JAYA</h1>
                <p className="text-xs text-gray-600">Konstruksi Profesional</p>
              </div>
            </Link>

            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Beranda</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Syarat dan ketentuan penggunaan layanan <strong>PT IZZA SUMBER JAYA</strong>.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di Syarat dan Ketentuan <strong>PT IZZA SUMBER JAYA</strong>. 
                Dokumen ini mengatur penggunaan website dan layanan konstruksi yang kami sediakan.
              </p>
              <p>
                Dengan mengakses atau menggunakan website dan layanan kami, Anda setuju untuk terikat 
                oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari 
                syarat ini, jangan gunakan website atau layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Definisi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Istilah-Istilah Penting:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>"Perusahaan"</strong> merujuk pada PT IZZA SUMBER JAYA</li>
                  <li><strong>"Klien"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</li>
                  <li><strong>"Layanan"</strong> merujuk pada semua jasa konstruksi yang kami sediakan</li>
                  <li><strong>"Proyek"</strong> merujuk pada pekerjaan konstruksi yang dilakukan untuk Klien</li>
                  <li><strong>"Website"</strong> merujuk pada situs web resmi PT IZZA SUMBER JAYA</li>
                  <li><strong>"Material"</strong> merujuk pada semua bahan bangunan yang digunakan dalam proyek</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Hammer className="w-6 h-6 mr-3 text-blue-600" />
                Layanan Konstruksi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Cakupan Layanan:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Konstruksi bangunan komersial dan industri</li>
                  <li>Renovasi dan restorasi bangunan</li>
                  <li>Konsultasi dan perencanaan konstruksi</li>
                  <li>Manajemen proyek konstruksi</li>
                  <li>Supervisi dan quality control</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Standar Kualitas:</h3>
                <p>
                  Kami berkomitmen untuk menyediakan layanan konstruksi yang memenuhi:
                </p>
                <ul className="space-y-2 list-disc list-inside mt-2">
                  <li>Standar nasional Indonesia (SNI)</li>
                  <li>Peraturan bangunan yang berlaku</li>
                  <li>Spesifikasi teknis yang disepakati</li>
                  <li>Jadwal waktu yang telah ditetapkan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                Tanggung Jawab Klien
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Sebagai Klien, Anda bertanggung jawab untuk:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Informasi Akurat:</strong> Memberikan informasi yang benar dan lengkap tentang proyek</li>
                <li><strong>Dokumen Legal:</strong> Menyediakan semua izin dan dokumen legal yang diperlukan</li>
                <li><strong>Akses Lokasi:</strong> Memastikan akses yang memadai ke lokasi proyek</li>
                <li><strong>Pembayaran Tepat Waktu:</strong> Melakukan pembayaran sesuai dengan kesepakatan</li>
                <li><strong>Koordinasi:</strong> Bekerja sama dengan tim kami selama pelaksanaan proyek</li>
                <li><strong>Keputusan:</strong> Memberikan keputusan tepat waktu untuk persetujuan desain dan material</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Syarat Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Struktur Pembayaran:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Uang Muka (DP):</strong> 30% dari total nilai kontrak</li>
                  <li><strong>Pembayaran Tahapan:</strong> Sesuai dengan milestone yang disepakati</li>
                  <li><strong>Pelunasan:</strong> 100% setelah serah terima proyek</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Metode Pembayaran:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Transfer bank ke rekening perusahaan</li>
                  <li>Giro atau cek atas nama PT IZZA SUMBER JAYA</li>
                  <li>Pembayaran tunai dengan kwitansi resmi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Keterlambatan Pembayaran:</h3>
                <p>
                  Keterlambatan pembayaran akan dikenakan bunga sebesar 2% per bulan dari total 
                  nilai yang terhutang, dihitung sejak tanggal jatuh tempo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Warranty */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Garansi dan Jaminan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Masa Garansi:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Struktur Bangunan:</strong> 1 tahun sejak serah terima</li>
                  <li><strong>Pekerjaan Finishing:</strong> 6 bulan sejak serah terima</li>
                  <li><strong>Material dan Peralatan:</strong> Sesuai dengan garansi pabrikan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Cakupan Garansi:</h3>
                <p>
                  Garansi mencakup kerusakan yang disebabkan oleh:
                </p>
                <ul className="space-y-2 list-disc list-inside mt-2">
                  <li>Kesalahan konstruksi atau instalasi</li>
                  <li>Defect material yang tidak sesuai spesifikasi</li>
                  <li>Pekerjaan yang tidak memenuhi standar kualitas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Tidak Termasuk Garansi:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Kerusakan akibat bencana alam</li>
                  <li>Pemeliharaan yang tidak tepat</li>
                  <li>Modifikasi oleh pihak ketiga</li>
                  <li>Penggunaan yang tidak sesuai fungsi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Sejauh diizinkan oleh hukum, tanggung jawab PT IZZA SUMBER JAYA dibatasi sebagai berikut:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Tanggung jawab maksimum sebesar nilai kontrak proyek</li>
                <li>Tidak bertanggung jawab atas kehilangan keuntungan atau bisnis</li>
                <li>Tidak bertanggung jawab atas kerusakan tidak langsung atau konsekuensial</li>
                <li>Tanggung jawab hanya berlaku untuk kerusakan yang dapat dibuktikan disebabkan oleh kelalaian kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-blue-600" />
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Prosedur Penyelesaian:</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li><strong>Negosiasi:</strong> Upaya penyelesaian secara musyawarah antara kedua belah pihak</li>
                  <li><strong>Mediasi:</strong> Jika negosiasi gagal, sengketa akan diselesaikan melalui mediasi</li>
                  <li><strong>Arbitrase:</strong> Jika mediasi gagal, sengketa akan diselesaikan melalui Badan Arbitrase Nasional Indonesia (BANI)</li>
                  <li><strong>Pengadilan:</strong> Sebagai upaya terakhir, sengketa akan diselesaikan di Pengadilan Negeri Majalengka</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Hukum yang Berlaku:</h3>
                <p>
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku 
                  di Republik Indonesia.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Semua konten, desain, gambar teknis, dan materi lainnya di website dan dalam dokumen 
                proyek adalah hak milik PT IZZA SUMBER JAYA dan dilindungi oleh hukum hak cipta.
              </p>
              <p>
                Klien tidak diperbolehkan:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Menggunakan desain untuk proyek lain tanpa izin tertulis</li>
                <li>Mereproduksi atau mendistribusikan materi proyek</li>
                <li>Mengklaim kepemilikan atas desain yang kami buat</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Pemutusan Kontrak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Alasan Pemutusan:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Pelanggaran berat syarat dan ketentuan oleh salah satu pihak</li>
                  <li>Kegagalan pembayaran lebih dari 30 hari</li>
                  <li>Force majeure yang membuat pelaksanaan proyek tidak mungkin</li>
                  <li>Kesepakatan bersama antara kedua belah pihak</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Konsekuensi Pemutusan:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Pembayaran untuk pekerjaan yang telah selesai</li>
                  <li>Pengembalian material yang belum digunakan</li>
                  <li>Pertanggungjawaban atas kerugian yang disebabkan oleh pemutusan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-white rounded-lg p-6 space-y-3">
                <p><strong>Perusahaan:</strong> PT IZZA SUMBER JAYA</p>
                <p><strong>Alamat:</strong> Blok Pajagan Nomor 11, Desa/Kelurahan Garawangi, Kec. Sumberjaya, Kab. Majalengka, Provinsi Jawa Barat, 45455</p>
                <p><strong>Telepon:</strong> 0823-1204-2902</p>
                <p><strong>Email:</strong> legal@izzasumberjaya.co.id</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t pt-8">
          <p className="text-gray-600">
            © 2024 PT IZZA SUMBER JAYA. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}