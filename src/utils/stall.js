// пригодится на 3-й неделе
// функция эмулирует задержку
// используй ее, когда будешь работать с запросами
// 🔑 не забудь, что эта функция вызывается с await
export async function stall(stallTime = 3000) {
  await new Promise((resolve) => setTimeout(resolve, stallTime));
}
