const codeInput = document.getElementById('code-input');
const previewFrame = document.getElementById('preview');

// بارگذاری کد ذخیره‌شده
document.addEventListener('DOMContentLoaded', () => {
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
        codeInput.value = savedCode;
    }
});

// اجرای کد
document.getElementById('run-btn').addEventListener('click', () => {
    const code = codeInput.value;
    previewFrame.contentDocument.open();
    previewFrame.contentDocument.write(code);
    previewFrame.contentDocument.close();
});

// ذخیره‌سازی کد در localStorage
document.getElementById('save-btn').addEventListener('click', () => {
    localStorage.setItem('savedCode', codeInput.value);
    alert('کد با موفقیت ذخیره شد!');
});

// دانلود کد به عنوان فایل HTML
document.getElementById('download-btn').addEventListener('click', () => {
    const code = codeInput.value;
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.html';
    a.click();
    URL.revokeObjectURL(url);
});

// خروج از برنامه
document.getElementById('exit-btn').addEventListener('click', () => {
    if (confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
        window.close();
    }
});
