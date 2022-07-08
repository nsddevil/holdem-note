export function validForm({
  email,
  password,
  cfPassword,
}: {
  email: string;
  password: string;
  cfPassword: string;
}) {
  const errors: string[] = [];

  if (!email.trim()) {
    errors.push("이메일은 필수입니다.");
  } else if (!validateEmail(email)) {
    errors.push("올바른 이메일 형식이 아닙니다.");
  }
  if (!password.trim()) {
    errors.push("비밀번호는 필수입니다.");
  } else if (password.length < 6 || password.length >= 20) {
    errors.push("비밀번호는 6자리 이상 20자 이하입니다.");
  } else if (!cfPassword.trim()) {
    errors.push("비밀번호 재확인 란은 필수입니다.");
  } else if (!validateEqual(password, cfPassword)) {
    errors.push("비밀번호가 일치하지 않습니다.");
  }

  return errors;
}

function validateEmail(email: string) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validateEqual(password: string, cfPassword: string) {
  return password === cfPassword;
}
