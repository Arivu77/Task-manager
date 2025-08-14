import { saveAs } from 'file-saver';
import { parse } from 'json2csv';
import jsPDF from 'jspdf';

export const exportToCSV = (data: any[], filename: string) => {
    try {
        const csv = parse(data);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, `${filename}.csv`);
    } catch (error) {
        console.error('Error exporting to CSV:', error);
    }
};

export const exportToPDF = (data: any[], filename: string) => {
    const doc = new jsPDF();
    let y = 10;

    doc.setFontSize(12);
    data.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.title} - ${item.description}`, 10, y);
        y += 10;
    });

    doc.save(`${filename}.pdf`);
};