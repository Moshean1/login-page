function validateForm() {
  let nameAr = document.getElementById("nameAr").value;
  let nameEn = document.getElementById("nameEn").value;
  let password = document.getElementById("password").value;
  let birthPlace = document.getElementById("birthPlace").value;
  let birthDate = document.getElementById("birthDate").value;
  let address = document.getElementById("address").value;
  let idNumber = document.getElementById("idNumber").value;
  let message = document.getElementById("message");

  // التحقق من الاسم العربي
  let arabicRegex = /^[\u0600-\u06FF ]+$/;
  if (!arabicRegex.test(nameAr)) {
    message.textContent = "❌ الاسم العربي غير صحيح";
    return;
  }

  // التحقق من الاسم الإنجليزي
  let englishRegex = /^[A-Za-z ]+$/;
  if (!englishRegex.test(nameEn)) {
    message.textContent = "❌ الاسم الإنجليزي غير صحيح";
    return;
  }

  // شرط كلمة المرور
  let passwordRegex = /^(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*\d){3,})(?=(.*[\W])).{8,}$/;
  if (!passwordRegex.test(password)) {
    message.textContent = "❌ كلمة المرور لا تحقق الشروط";
    return;
  }

  // رقم الهوية
  if (!/^\d+$/.test(idNumber)) {
    message.textContent = "❌ رقم الهوية يجب أن يكون أرقام فقط";
    return;
  }

  // التحقق من الحقول الفارغة
  if (!birthPlace || !birthDate || !address) {
    message.textContent = "❌ جميع الحقول مطلوبة";
    return;
  }

  message.style.color = "#2ecc71";
  message.textContent = "✅ تم التسجيل بنجاح!";
}
