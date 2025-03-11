// فعال‌سازی CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById('code-input'), {
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "default",
    direction: "rtl"
});

// بارگذاری کد ذخیره‌شده از localStorage
const savedCode = localStorage.getItem('savedCode');
if (savedCode) {
    editor.setValue(savedCode);
}

// اجرای کد
document.getElementById('run-btn').addEventListener('click', function () {
    const code = editor.getValue();
    const previewFrame = document.getElementById('preview');
    previewFrame.contentDocument.open();
    previewFrame.contentDocument.write(code);
    previewFrame.contentDocument.close();
});

// ذخیره‌سازی کد در localStorage
document.getElementById('save-btn').addEventListener('click', function () {
    const code = editor.getValue();
    localStorage.setItem('savedCode', code);
    alert('کد با موفقیت ذخیره شد!');
});

// دانلود کد به‌صورت فایل HTML
document.getElementById('download-btn').addEventListener('click', function () {
    const code = editor.getValue();
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.html';
    a.click();
    URL.revokeObjectURL(url);
});

// خروج
document.getElementById('exit-btn').addEventListener('click', function () {
    if (confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
        window.close();
    }
});
