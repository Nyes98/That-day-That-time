export const loginValidation = {
  email: {
    required: "이메일은 필수입니다",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "올바른 이메일 형식이 아닙니다",
    },
  },
  password: {
    required: "비밀번호는 필수입니다",
    minLength: {
      value: 6,
      message: "비밀번호는 최소 6자 이상이어야 합니다",
    },
  },
};
