export function multerErrorMessages(code: string) {
  switch (code) {
    case 'LIMIT_UNEXPECTED_FILE':
      return 'Arquivo inválido. Formatos aceitos: [jpg,jpeg,png].';
    case 'LIMIT_FILE_SIZE':
      return 'Tamanho do arquivo inválido. Limite: 56kb.';
  }
}
