// 共用：手機版導覽選單開關
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const navlinks = document.querySelector('.navlinks');
  if (toggle && navlinks) {
    toggle.addEventListener('click', () => {
      navlinks.classList.toggle('open');
    });
  }
  // 手機版：點擊「業務項目」展開/收合子選單
  document.querySelectorAll('.navitem > span').forEach(span => {
    span.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        span.parentElement.classList.toggle('open');
      }
    });
  });

  // 聯繫表單處理
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', handleContactSubmit);
    const submitBtn = form.querySelector('.submit');
    if (submitBtn && submitBtn.type !== 'submit') {
      submitBtn.addEventListener('click', (e) => handleContactSubmit(e));
    }
  }
});

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target.closest ? e.target.closest('form') : document.querySelector('.contact-form');
  const msgBox = document.querySelector('.form-msg');
  const submitBtn = form.querySelector('.submit');

  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();

  if (!name || !phone) {
    showMsg(msgBox, '請填寫姓名與聯繫電話', 'error');
    return;
  }

  const payload = {
    access_key: '8ae52184-04be-4a2b-98c8-81ace6f2e09b',
    subject: '宏遠廣告官網 - 新的聯繫詢問',
    from_name: '宏遠廣告官網表單',
    姓名: name,
    公司名稱: form.querySelector('[name="company"]').value.trim(),
    聯繫電話: phone,
    詢問服務: form.querySelector('[name="service"]').value,
    詢問內容備註: form.querySelector('[name="note"]').value.trim()
  };

  submitBtn.disabled = true;
  const originalText = submitBtn.textContent;
  submitBtn.textContent = '送出中...';

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        showMsg(msgBox, '感謝您的詢問，我們將儘速與您聯繫！', 'success');
        form.reset();
      } else {
        showMsg(msgBox, '送出失敗，麻煩稍後再試，或直接來電 02-8285-5888', 'error');
      }
    })
    .catch(() => {
      showMsg(msgBox, '送出失敗，麻煩稍後再試，或直接來電 02-8285-5888', 'error');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
}

function showMsg(box, text, type) {
  if (!box) return;
  box.textContent = text;
  box.className = 'form-msg show ' + type;
}
