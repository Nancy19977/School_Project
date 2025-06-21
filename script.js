document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".event-form");
  const cancelBtn = document.querySelector(".btn-cancel");
ظ
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("✅ تم حفظ الحدث بنجاح!");
    form.reset();
  });

  
  cancelBtn.addEventListener("click", function () {
    if (confirm("هل أنت متأكد أنك تريد إلغاء البيانات؟")) {
      form.reset(); 
    }
  });
});
