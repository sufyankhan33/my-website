import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Search, Filter, CheckCircle2, AlertCircle, FileText, Download, CheckCircle } from 'lucide-react';

const feeData = [
  { id: 1, name: 'Alice Freeman', fatherName: 'John Freeman', enrollNo: 'A1001', class: '10th A', total: 1200, paid: 1200, status: 'Paid', date: '12 Aug 2024' },
  { id: 2, name: 'Bobby Singer', fatherName: 'Robert Singer', enrollNo: 'B2042', class: '10th B', total: 1200, paid: 600, status: 'Partial', date: '05 Sep 2024' },
  { id: 3, name: 'Charlie Dean', fatherName: 'Mark Dean', enrollNo: 'C3055', class: '9th A', total: 1100, paid: 0, status: 'Unpaid', date: '-' },
  { id: 4, name: 'Diana Prince', fatherName: 'Hippolyta Prince', enrollNo: 'D4099', class: '11th Sci', total: 1500, paid: 1500, status: 'Paid', date: '22 Aug 2024' },
];

export default function Fees() {
  const [studentsData, setStudentsData] = useState(feeData);
  const [selectedStudent, setSelectedStudent] = useState(studentsData[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPaying, setIsPaying] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const filteredStudents = studentsData.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const initiatePayment = () => {
    setShowConfirmModal(true);
  };

  const confirmPayment = () => {
    setShowConfirmModal(false);
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setShowSuccessModal(true);
      
      const updatedStudent = { ...selectedStudent, paid: selectedStudent.total, status: 'Paid', date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) };
      setSelectedStudent(updatedStudent);
      setStudentsData(prev => prev.map(s => s.id === updatedStudent.id ? updatedStudent : s));
      
      setTimeout(() => setShowSuccessModal(false), 3000);
    }, 1500);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const printWindow = window.open('', '_blank');
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Fee Receipt - ${selectedStudent.name}</title>
          <style>
            body { font-family: 'Arial', sans-serif; color: #000; padding: 20px; }
            .receipt-container { border: 2px solid #000; max-width: 800px; margin: 0 auto; padding: 0; }
            .header { text-align: center; border-bottom: 2px solid #000; padding: 15px; position: relative; }
            .logo { position: absolute; left: 20px; top: 15px; width: 60px; height: 60px; background: #eee; border-radius: 50%; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; }
            .school-name { font-size: 24px; font-weight: bold; margin: 0; letter-spacing: 2px; }
            .school-address { font-size: 14px; margin: 5px 0; }
            .title-bar { text-align: center; font-weight: bold; padding: 8px; border-bottom: 2px solid #000; background: #f9f9f9; }
            .student-info { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 2px solid #000; }
            .student-info div { padding: 8px 15px; border-bottom: 1px solid #ccc; }
            .student-info div:nth-child(odd) { border-right: 1px solid #ccc; }
            .student-info div:nth-last-child(-n+2) { border-bottom: none; }
            .fee-table { width: 100%; border-collapse: collapse; }
            .fee-table th { padding: 10px; text-align: left; border-bottom: 2px solid #000; background: #f9f9f9; }
            .fee-table td { padding: 8px 10px; border-bottom: 1px dashed #ccc; }
            .fee-table .amount { text-align: right; }
            .totals { display: flex; justify-content: space-between; padding: 15px; border-top: 2px solid #000; border-bottom: 1px solid #000; font-weight: bold; }
            .footer { padding: 15px; display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px; }
            .signature { border-top: 1px solid #000; width: 200px; text-align: center; padding-top: 5px; }
            .watermark { position: fixed; bottom: 10px; left: 10px; font-size: 10px; color: #888; font-style: italic; }
            @media print { .receipt-container { border: 2px solid #000 !important; } }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="header">
              <div class="logo">LOGO</div>
              <h1 class="school-name">SMARTSCHOOL OS ACADEMY</h1>
              <p class="school-address">123 Education Boulevard, Tech City, NY 10001</p>
              <p class="school-address">U-Dise Code : 0987654321, Call : +1 800 123 4567</p>
            </div>
            
            <div class="title-bar">
              FEE RECEIPT (SESSION : 2023-24)
            </div>
            
            <div class="student-info">
              <div><strong>Receipt No :</strong> INV-${2024000 + selectedStudent.id}</div>
              <div><strong>Payment Date :</strong> ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
              <div><strong>Name :</strong> ${selectedStudent.name}</div>
              <div><strong>Enroll No. :</strong> ${selectedStudent.enrollNo}</div>
              <div><strong>Father's :</strong> ${selectedStudent.fatherName}</div>
              <div><strong>Family ID :</strong> F-${Math.floor(Math.random() * 1000)}</div>
              <div><strong>Class :</strong> ${selectedStudent.class}</div>
              <div><strong>Fee for Month :</strong> ${new Date().toLocaleString('en-US', { month: 'long' })}</div>
            </div>
            
            <table class="fee-table">
              <thead>
                <tr>
                  <th>Fee Caption</th>
                  <th class="amount">Paid Amt.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01. Tuition Fee</td>
                  <td class="amount">${(selectedStudent.total * 0.7).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>02. Transport Fee</td>
                  <td class="amount">${(selectedStudent.total * 0.2).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>03. Computer Fee</td>
                  <td class="amount">${(selectedStudent.total * 0.1).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            
            <div class="totals">
              <div>Payment Mode : Online/Card</div>
              <div>Total Paid Amt. : $${selectedStudent.paid.toFixed(2)}</div>
            </div>
            
            <div style="padding: 15px; font-size: 14px;">
              <strong>Remark :</strong> Thank you for your timely payment. This is a computer generated receipt.
            </div>
            
            <div class="footer">
              <div style="width: 200px;"></div>
              <div class="signature">
                Received By<br>
                <span style="font-size: 12px; font-weight: normal;">SmartSchool System Admin</span>
              </div>
            </div>
          </div>
          <div class="watermark">Generated by SmartSchool OS</div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
        </html>
      `;
      printWindow.document.open();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      setIsDownloading(false);
    }, 1000);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setShowSuccessModal(false);
    setIsPaying(false);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Fee Management</h1>
          <p className="text-gray-500 text-sm mt-1">Track payments, issue receipts, and manage dues.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Students List view */}
        <div className="lg:col-span-2 space-y-4">
          <div className="card p-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search student by name..." 
                className="input-field pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn-secondary h-10 px-4"><Filter className="h-4 w-4" /></button>
          </div>

          <div className="space-y-3">
            {filteredStudents.length > 0 ? filteredStudents.map((student) => (
              <motion.div 
                whileHover={{ scale: 1.01 }}
                key={student.id} 
                onClick={() => handleStudentSelect(student)}
                className={`card p-4 cursor-pointer transition-colors border-2 ${selectedStudent.id === student.id ? 'border-primary-500 bg-primary-50/30' : 'border-transparent hover:border-gray-200'}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${
                      student.status === 'Paid' ? 'bg-success/10 text-success' :
                      student.status === 'Partial' ? 'bg-warning/10 text-warning-dark' : 'bg-danger/10 text-danger'
                    }`}>
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{student.name}</h3>
                      <p className="text-xs text-gray-500">{student.class}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${student.total}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block mt-1 ${
                      student.status === 'Paid' ? 'bg-success/10 text-success-dark' :
                      student.status === 'Partial' ? 'bg-warning/10 text-warning-dark' : 'bg-danger/10 text-danger-dark'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            )) : (
              <p className="text-gray-500 p-4 text-center">No students found matching your search.</p>
            )}
          </div>
        </div>

        {/* Right Col: Timeline & Receipt Preview */}
        <div className="lg:col-span-1 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedStudent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="card bg-gradient-to-br from-indigo-900 to-primary-900 text-white shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20"><FileText className="h-24 w-24" /></div>
              
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Receipt Preview</h3>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm relative z-10">
                <div className="flex justify-between items-center mb-4 border-b border-white/20 pb-4">
                  <div>
                    <p className="text-xs text-indigo-200">Billed to</p>
                    <p className="font-bold text-lg">{selectedStudent.name}</p>
                    <p className="text-xs">{selectedStudent.class}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-indigo-200">Amount</p>
                    <p className="font-black text-2xl">${selectedStudent.paid}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-indigo-100">
                  <div className="flex justify-between">
                    <span>Invoice #</span>
                    <span className="font-mono">INV-{2024000 + selectedStudent.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date Paid</span>
                    <span>{selectedStudent.date}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-white/20">
                    <span>Balance Due</span>
                    <span className={selectedStudent.total - selectedStudent.paid > 0 ? "text-warning-light" : "text-success-light"}>
                      ${selectedStudent.total - selectedStudent.paid}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  {selectedStudent.total - selectedStudent.paid > 0 && (
                    <button 
                      onClick={initiatePayment} 
                      disabled={isPaying || showSuccessModal}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 font-bold rounded-xl text-sm transition-colors ${
                        showSuccessModal ? 'bg-success text-white' : 'bg-warning-light text-warning-900 hover:bg-warning'
                      }`}
                    >
                      {isPaying ? (
                        <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-4 w-4 border-2 border-warning-900/30 border-t-warning-900 rounded-full" /> Processing</>
                      ) : showSuccessModal ? (
                        <><CheckCircle className="h-4 w-4" /> Paid Successfully</>
                      ) : (
                        <><DollarSign className="h-4 w-4" /> Record Payment</>
                      )}
                    </button>
                  )}
                  <button 
                    onClick={handleDownload}
                    disabled={selectedStudent.paid === 0 || isDownloading} 
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-primary-900 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDownloading ? (
                      <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-4 w-4 border-2 border-primary-900/30 border-t-primary-900 rounded-full" /> Generating...</>
                    ) : (
                      <><Download className="h-4 w-4" /> Receipt</>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Payment Confirmation Modal */}
          <AnimatePresence>
            {showConfirmModal && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-gray-100"
                >
                  <div className="h-12 w-12 rounded-full bg-warning/20 text-warning-dark flex items-center justify-center mb-4 mx-auto">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Confirm Payment</h3>
                  <p className="text-center text-gray-600 text-sm mb-6">
                    You are about to record a payment of <strong className="text-gray-900">${selectedStudent.total - selectedStudent.paid}</strong> for <strong className="text-gray-900">{selectedStudent.name}</strong>. This action cannot be undone.
                  </p>
                  <div className="flex gap-3">
                    <button onClick={() => setShowConfirmModal(false)} className="flex-1 py-2.5 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">Cancel</button>
                    <button onClick={confirmPayment} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-warning-dark hover:bg-warning-700 transition-colors shadow-lg shadow-warning/30">Confirm</button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Payment Success Modal */}
          <AnimatePresence>
            {showSuccessModal && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full border border-gray-100 flex flex-col items-center text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="h-16 w-16 rounded-full bg-success/20 text-success-dark flex items-center justify-center mb-4"
                  >
                    <CheckCircle className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    The payment for {selectedStudent.name} has been securely processed and recorded.
                  </p>
                  <button onClick={() => setShowSuccessModal(false)} className="w-full py-3 rounded-xl font-bold text-white bg-success-dark hover:bg-success-800 transition-colors shadow-lg shadow-success/30">
                    Done
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <div className="card">
            <h3 className="text-md font-bold text-gray-900 mb-4">Payment Timeline</h3>
            <div className="relative border-l-2 border-gray-100 ml-3 space-y-6">
              
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-success ring-4 ring-white" />
                <p className="text-sm font-bold text-gray-900 flex items-center gap-2">Term 1 Fee <CheckCircle2 className="h-4 w-4 text-success" /></p>
                <p className="text-xs text-gray-500 mt-1">Paid $600 on 12 Aug 2024</p>
              </div>

              <div className="relative pl-6">
                <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full ring-4 ring-white ${selectedStudent.paid >= 1200 ? 'bg-success' : selectedStudent.paid > 600 ? 'bg-warning' : 'bg-gray-200'}`} />
                <p className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  Term 2 Fee 
                  {selectedStudent.paid >= 1200 ? <CheckCircle2 className="h-4 w-4 text-success" /> : <AlertCircle className="h-4 w-4 text-warning" />}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedStudent.paid >= 1200 ? 'Paid $600 on 05 Sep 2024' : 'Due by 30 Oct 2024'}
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gray-200 ring-4 ring-white" />
                <p className="text-sm font-bold text-gray-500 flex items-center gap-2">Term 3 Fee</p>
                <p className="text-xs text-gray-400 mt-1">Scheduled for Jan 2025</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
