'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PT IZZA SUMBER JAYA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
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
                <Eye className="w-6 h-6 mr-3 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di Kebijakan Privasi <strong>PT IZZA SUMBER JAYA</strong>. 
                Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                dan membagikan informasi pribadi Anda ketika Anda menggunakan website dan layanan kami.
              </p>
              <p>
                Kami berkomitmen untuk memastikan bahwa privasi Anda dilindungi sesuai dengan 
                hukum dan peraturan yang berlaku di Indonesia, termasuk Undang-Undang No. 27 Tahun 2022 
                tentang Perlindungan Data Pribadi.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Database className="w-6 h-6 mr-3 text-blue-600" />
                Pengumpulan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Data yang Kami Kumpulkan:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Identitas Pribadi:</strong> Nama lengkap, email, nomor telepon, alamat</li>
                  <li><strong>Informasi Profesional:</strong> Nama perusahaan, jabatan, bidang usaha</li>
                  <li><strong>Data Kontak:</strong> Alamat lengkap, kode pos, nomor fax</li>
                  <li><strong>Informasi Proyek:</strong> Detail kebutuhan konstruksi, lokasi proyek, anggaran</li>
                  <li><strong>Data Teknis:</strong> IP address, browser information, cookies, log aktivitas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Cara Pengumpulan:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Formulir kontak dan permintaan konsultasi di website</li>
                  <li>Komunikasi langsung melalui email atau telepon</li>
                  <li>Meeting dan kunjungan lapangan</li>
                  <li>Analisis otomatis melalui cookies dan tracking technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-blue-600" />
                Penggunaan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Layanan Konstruksi:</strong> Menyediakan penawaran, konsultasi, dan eksekusi proyek</li>
                <li><strong>Komunikasi:</strong> Merespons pertanyaan dan memberikan informasi tentang layanan kami</li>
                <li><strong>Penawaran Khusus:</strong> Mengirimkan informasi tentang promosi dan layanan terbaru</li>
                <li><strong>Analisis Bisnis:</strong> Menganalisis tren dan preferensi untuk meningkatkan layanan</li>
                <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li><strong>Keamanan:</strong> Melindungi keamanan sistem dan mencegah penipuan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-blue-600" />
                Perlindungan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">Langkah-Langkah Keamanan:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Enkripsi Data:</strong> Data sensitif dienkripsi dengan standar industri</li>
                  <li><strong>Akses Terbatas:</strong> Hanya personel yang berwenang yang dapat mengakses data</li>
                  <li><strong>Firewall & Security:</strong> Sistem keamanan berlapis untuk melindungi dari akses tidak sah</li>
                  <li><strong>Regular Backup:</strong> Backup data rutin dengan lokasi yang aman</li>
                  <li><strong>Security Audit:</strong> Audit keamanan berkala untuk memastikan kepatuhan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Retensi Data:</h3>
                <p>
                  Kami menyimpan data pribadi Anda selama diperlukan untuk tujuan yang telah disebutkan, 
                  kecuali jika periode penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum.
                </p>
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
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi kami, 
                silakan hubungi:
              </p>
              <div className="bg-white rounded-lg p-6 space-y-3">
                <p><strong>Perusahaan:</strong> PT IZZA SUMBER JAYA</p>
                <p><strong>Alamat:</strong> Blok Pajagan Nomor 11, Desa/Kelurahan Garawangi, Kec. Sumberjaya, Kab. Majalengka, Provinsi Jawa Barat, 45455</p>
                <p><strong>Telepon:</strong> 0823-1204-2902</p>
                <p><strong>Email:</strong> privacy@izzasumberjaya.co.id</p>
              </div>
              <p>
                Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t pt-8">
          <p className="text-gray-600">
            © 2024 PT IZZA SUMBER JAYA. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition-colors">
              Terms & Conditions
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