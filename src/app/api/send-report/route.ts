// app/api/send-report/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend('re_YUZKYP6U_Yfb49xvfF6BgqmB9X93KddpG');

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const phone       = formData.get('phoneNum') as string;  
    const location    = formData.get('lokasi') as string;    
    const issueType   = formData.get('jenis') as string;     
    const description = formData.get('deskripsi') as string; 
    const image       = formData.get('image') as File | null;

    const attachments: { filename: string; content: Buffer }[] = [];
    if (image && image.size > 0) {
      const buffer = Buffer.from(await image.arrayBuffer());
      attachments.push({ filename: image.name, content: buffer });
    }

    const { data, error } = await resend.emails.send({
      from: 'muhammadilfi539@gmail.com',   //buat masih localhost pake onboardng, nanti klo udh deploy baru ubah jadi uniflow    
      to: ['mickavallery@gmail.com'],       //buat testing cmn bisa pake uniflow, nnt udh deploy ubah jd pihak UNJ        
      subject: `[Laporan] ${issueType} — ${location}`,
      attachments,
      html: `
        <h2>Laporan Kendala Baru</h2>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><b>Telepon</b></td><td>${phone}</td></tr>
          <tr><td><b>Lokasi</b></td><td>${location}</td></tr>
          <tr><td><b>Jenis</b></td><td>${issueType}</td></tr>
          <tr><td><b>Deskripsi</b></td><td>${description}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (err) {
    console.error('Caught error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}