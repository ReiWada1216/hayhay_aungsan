/**
 * メンバー紹介ページコンポーネント
 * チームメンバーの情報を表示
 * プロフィール写真、名前、役割、自己紹介を含む
 */
import React from 'react';
import { members } from '@/lib/data/members';

export default function Members() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-bold text-earth-800 sm:text-4xl">メンバー紹介</h2>
        <p className="mt-4 text-lg text-stone-600">
          多様なバックグラウンドを持つメンバーが、<br/>それぞれの得意分野を活かして活動しています。
          立命館大学国際関係学部出身のメンバーです。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="mx-auto h-32 w-32 rounded-full overflow-hidden border-4 border-earth-100 mb-4 shadow-inner">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-stone-800">{member.name}</h3>
            <p className="text-sm font-medium text-nature-600 mb-4">{member.role}</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
