/**
 * 商品画像コンポーネント
 * エラーハンドリングのためのクライアントコンポーネント
 */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // ローカル画像かどうかを判定
  const isLocalImage = src.startsWith('/');

  if (hasError) {
    return (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-stone-200 text-stone-500">
        画像を読み込めません
      </div>
    );
  }

  if (isLocalImage) {
    // ローカル画像の場合
    return (
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={() => setHasError(true)}
      />
    );
  }

  // microCMS画像の場合
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setHasError(true)}
    />
  );
}
