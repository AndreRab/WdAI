function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword(
  minLength,
  maxLength,
  includeUppercase,
  includeSpecial
) {
  const length = generateRandomInt(minLength, maxLength);
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const specials = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let chars = lowercase + digits;
  if (includeUppercase) chars += uppercase;
  if (includeSpecial) chars += specials;

  password = "";
  for (let i = 0; i < length; i++) {
    index = generateRandomInt(0, chars.length - 1);
    password += chars[index];
  }

  return password;
}

document.getElementById("generate").addEventListener("click", () => {
  const min = parseInt(document.getElementById("minLength").value);
  const max = parseInt(document.getElementById("maxLength").value);
  const includeUppercase = parseInt(
    document.getElementById("includeUppercase").value
  );
  const includeSpecial = parseInt(
    document.getElementById("includeSpecial").value
  );

  if (min > max || min < 0 || max < 0) {
    alert("Check your input data");
    return;
  }
  alert(generatePassword(min, max, includeUppercase, includeSpecial));
});
