/**
 * 日付フォーマットユーティリティ
 * microCMSから取得したISO 8601形式の日付文字列を整形する
 */

/**
 * ISO 8601形式の日付文字列を「YYYY-MM-DD」形式に変換
 * @param dateString - ISO形式の日付文字列 (例: "2026-01-25T15:00:00.000Z")
 * @returns フォーマットされた日付文字列 (例: "2026-01-25")
 */
export function formatDateSimple(dateString: string): string {
  const date = new Date(dateString);
  
  // 無効な日付の場合は元の文字列を返す
  if (isNaN(date.getTime())) {
    return dateString;
  }
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

/**
 * ISO 8601形式の日付文字列を日本語形式に変換
 * @param dateString - ISO形式の日付文字列 (例: "2026-01-25T15:00:00.000Z")
 * @returns フォーマットされた日付文字列 (例: "2026年1月25日")
 */
export function formatDateJapanese(dateString: string): string {
  const date = new Date(dateString);
  
  // 無効な日付の場合は元の文字列を返す
  if (isNaN(date.getTime())) {
    return dateString;
  }
  
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * デフォルトの日付フォーマット関数（日本語形式）
 * @param dateString - ISO形式の日付文字列
 * @returns フォーマットされた日付文字列 (例: "2026年1月25日")
 */
export function formatDate(dateString: string): string {
  return formatDateJapanese(dateString);
}
