// src/utils/exportUtils.ts
import { Response } from 'express';
import PDFDocument from 'pdfkit';
import * as ExcelJS from 'exceljs';

export const exportToPDF = (data: any[], res: Response) => {
    const doc = new PDFDocument();
    doc.pipe(res);
    data.forEach(item => doc.text(JSON.stringify(item)));
    doc.end();
};

export const exportToExcel = async (data: any[], res: Response) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');
    worksheet.addRows(data);
    await workbook.xlsx.write(res);
};

export const exportToTXT = (data: any[], res: Response) => {
    const txtData = data.map(item => JSON.stringify(item)).join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.send(txtData);
};