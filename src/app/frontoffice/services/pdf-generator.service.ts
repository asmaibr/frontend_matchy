import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Content } from '../models/content.model';

@Injectable({ providedIn: 'root' })
export class PdfGeneratorService {
  downloadContentAsPdf(content: Content, authorName?: string): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let y = margin;

    doc.setFontSize(10); doc.setTextColor(100, 100, 100);
    doc.text('Matchy Platform', pageWidth - margin, y, { align: 'right' });
    y += 20;
    doc.setDrawColor(59, 130, 246); doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y); y += 15;

    if (content.type === 'COURS') doc.setFillColor(37, 99, 235);
    else if (content.type === 'ARTICLE') doc.setFillColor(16, 185, 129);
    else doc.setFillColor(239, 68, 68);
    doc.roundedRect(margin, y, 30, 8, 2, 2, 'F');
    doc.setTextColor(255, 255, 255); doc.setFontSize(9);
    doc.text(content.type, margin + 15, y + 5.5, { align: 'center' }); y += 15;

    doc.setFontSize(24); doc.setTextColor(0, 0, 0); doc.setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(content.title, contentWidth);
    doc.text(titleLines, margin, y); y += titleLines.length * 10 + 10;

    doc.setFontSize(10); doc.setFont('helvetica', 'normal'); doc.setTextColor(100, 100, 100);
    if (authorName) { doc.text(`Author: ${authorName}`, margin, y); y += 7; }
    if (content.createdAt) {
      doc.text(`Published: ${new Date(content.createdAt).toLocaleDateString()}`, margin, y); y += 7;
    }
    y += 10;
    doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y); y += 12;

    doc.setFontSize(12); doc.setTextColor(0, 0, 0); doc.setFont('helvetica', 'normal');
    const descLines = doc.splitTextToSize(content.description, contentWidth);
    for (const line of descLines) {
      if (y > pageHeight - margin - 20) { doc.addPage(); y = margin; }
      doc.text(line, margin, y); y += 7;
    }

    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.3);
      doc.line(margin, pageHeight - 20, pageWidth - margin, pageHeight - 20);
      doc.setFontSize(8); doc.setTextColor(150, 150, 150);
      doc.text('Downloaded from Matchy Platform', margin, pageHeight - 12);
      doc.text(`Page ${i} / ${totalPages}`, pageWidth - margin, pageHeight - 12, { align: 'right' });
    }

    doc.save(content.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').substring(0, 50) + '.pdf');
  }
}
