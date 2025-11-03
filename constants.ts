import React from 'react';
import { Page, Lesson, QuizQuestion } from './types';

export type NavLink = {
  key: string;
  page: Page;
  icon: string;
  adminOnly?: boolean;
  group?: 'lessons' | 'tools';
};

export const NAV_LINKS: NavLink[] = [
  { key: 'nav.home', page: 'home', icon: '🏠' },
  { key: 'nav.thegioi', page: 'thegioi', icon: '🌍' },
  { key: 'nav.bai1', page: 'bai1', icon: '🌱', group: 'lessons' },
  { key: 'nav.bai2', page: 'bai2', icon: '🌿', group: 'lessons' },
  { key: 'nav.bai3', page: 'bai3', icon: '🌳', group: 'lessons' },
  { key: 'nav.quiztk', page: 'quiztk', icon: '🧠', group: 'lessons' },
  { key: 'nav.flash', page: 'flash', icon: '🎴', group: 'tools' },
  { key: 'nav.danhgia', page: 'danhgia', icon: '⭐', group: 'tools' },
  { key: 'nav.game', page: 'game', icon: '🎮', group: 'tools' },
  { key: 'nav.admin', page: 'admin', icon: '🛡️', adminOnly: true },
];

export const LESSONS: Lesson[] = [
    {
      id: 'bai1',
      titleKey: 'lessons.b1.title',
      metaKey: 'lessons.b1.meta',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
      content: React.createElement(
        'div',
        null,
        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-[var(--primary-dark)]' }, 'Hiểu Về Đất'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Thành phần cơ bản: '), 'Đất được tạo thành từ 3 thành phần chính: ', React.createElement('b', null, 'cát'), ', ', React.createElement('b', null, 'thịt (phù sa)'), ', và ', React.createElement('b', null, 'sét'), '. Tỷ lệ của chúng quyết định kết cấu đất, ảnh hưởng đến khả năng thoát nước và giữ dinh dưỡng. Đất thịt pha sét là lý tưởng cho hầu hết cây trồng vì nó cân bằng giữa việc giữ ẩm và thoáng khí.'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Chất hữu cơ là vàng: '), 'Đây là vật chất từ thực vật và động vật đã phân hủy. Nó giúp cải thiện cấu trúc đất (làm đất tơi xốp), tăng khả năng giữ nước như một miếng bọt biển, và cung cấp nguồn dinh dưỡng ổn định cho cây. Phân compost, phân chuồng ủ hoai, và lá cây mục là những nguồn tuyệt vời.'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Độ pH quan trọng: '), 'Độ pH đo lường độ axit hoặc kiềm của đất. Hầu hết cây trồng phát triển tốt nhất ở độ pH trung tính từ 6.0 đến 7.0. Ở độ pH này, các chất dinh dưỡng trong đất dễ dàng hòa tan để rễ cây hấp thụ. Bạn có thể dùng bộ dụng cụ đơn giản để kiểm tra và điều chỉnh bằng vôi (nếu quá axit) hoặc lưu huỳnh (nếu quá kiềm).'),
        React.createElement('h3', { className: 'text-xl font-bold mb-3 mt-5 text-[var(--primary-dark)]' }, 'Nước - Nguồn Sống Của Cây'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Tưới đúng cách: '), 'Tưới quá nhiều gây úng rễ, tưới quá ít cây sẽ héo. Thời điểm tốt nhất để tưới là vào sáng sớm để giảm sự bốc hơi. Hãy tưới đẫm vào gốc cây thay vì tưới lướt trên bề mặt.'),
        React.createElement(
          'ul',
          { style: { margin: '8px 0 8px 18px', listStyleType: 'disc' } },
          React.createElement('li', null, React.createElement('b', null, 'Tưới nhỏ giọt: '), 'Phương pháp hiệu quả nhất, tiết kiệm đến 90% lượng nước bằng cách đưa nước từ từ trực tiếp đến rễ cây.'),
          React.createElement('li', null, React.createElement('b', null, 'Tưới phun mưa: '), 'Phù hợp với các loại rau và bãi cỏ, nhưng có thể lãng phí nước do bốc hơi và làm ướt lá, tăng nguy cơ nấm bệnh.')
        ),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Chất lượng nước: '), 'Nước sạch, không nhiễm mặn, phèn, hoặc các hóa chất công nghiệp là điều kiện tiên quyết. Nước mưa là nguồn nước tự nhiên tốt nhất cho cây trồng.')
      ),
    },
    {
      id: 'bai2',
      titleKey: 'lessons.b2.title',
      metaKey: 'lessons.b2.meta',
      image: 'https://images.unsplash.com/photo-1525923838299-2d12e042183c?auto=format&fit=crop&w=1200&q=80',
      content: React.createElement(
        'div',
        null,
        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-[var(--primary-dark)]' }, '"Bữa Ăn" Chính Của Cây'),
        React.createElement('p', { className: 'mb-2' }, 'Giống như con người, cây cần một chế độ ăn uống cân bằng. Các chất dinh dưỡng được chia thành ba nhóm chính.'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Dinh dưỡng Đa lượng (N-P-K):')),
        React.createElement(
          'ul',
          { style: { margin: '8px 0 8px 18px', listStyleType: 'disc' } },
          React.createElement('li', null, React.createElement('b', null, 'Đạm (N - Nitrogen): '), 'Cần thiết cho sự phát triển của lá và thân. Thiếu đạm, lá già sẽ chuyển sang màu vàng nhạt và cây còi cọc.'),
          React.createElement('li', null, React.createElement('b', null, 'Lân (P - Phosphorus): '), 'Quan trọng cho việc phát triển rễ, ra hoa và đậu quả. Thiếu lân, lá cây có thể có màu xanh đậm ngả tím và cây chậm lớn.'),
          React.createElement('li', null, React.createElement('b', null, 'Kali (K - Potassium): '), 'Giúp cây cứng cáp, tăng cường khả năng chống chịu sâu bệnh và điều tiết nước. Thiếu kali, mép lá già thường bị cháy khô.')
        ),
        React.createElement('h3', { className: 'text-xl font-bold mb-3 mt-5 text-[var(--primary-dark)]' }, '"Vitamin" Cho Cây'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Dinh dưỡng Trung và Vi lượng: '), 'Cây cũng cần các chất như Canxi (Ca), Magie (Mg), Lưu huỳnh (S) với lượng vừa phải. Các nguyên tố vi lượng như Sắt (Fe), Kẽm (Zn), Mangan (Mn) chỉ cần một lượng rất nhỏ nhưng không thể thiếu, thiếu chúng sẽ gây ra các bệnh lý đặc trưng trên lá non.'),
        React.createElement('h3', { className: 'text-xl font-bold mb-3 mt-5 text-[var(--primary-dark)]' }, 'Chăm Sóc & "Cắt Tóc"'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Tỉa cành, tạo tán: '), 'Đây là một kỹ thuật quan trọng để loại bỏ các cành chết, cành bị bệnh hoặc mọc chen chúc. Việc này giúp ánh sáng và không khí lưu thông tốt hơn, giảm nguy cơ sâu bệnh và tập trung năng lượng của cây vào việc nuôi dưỡng những cành khỏe mạnh và quả.'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Phòng trừ sâu bệnh: '), '"Phòng bệnh hơn chữa bệnh". Hãy thường xuyên kiểm tra cây để phát hiện sớm các dấu hiệu bất thường. Ưu tiên các biện pháp sinh học như bắt sâu bằng tay, sử dụng các loài thiên địch (bọ rùa, ong ký sinh) hoặc dùng thuốc trừ sâu thảo dược (dầu neem, dung dịch tỏi ớt) trước khi nghĩ đến thuốc hóa học.')
      ),
    },
    {
      id: 'bai3',
      titleKey: 'lessons.b3.title',
      metaKey: 'lessons.b3.meta',
      image: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=80',
      content: React.createElement(
        'div',
        null,
        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-[var(--primary-dark)]' }, 'Canh Tác Thông Minh'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Luân canh cây trồng: '), 'Thay vì trồng một loại cây duy nhất năm này qua năm khác, hãy luân phiên các họ cây trồng khác nhau. Ví dụ: sau vụ trồng cà chua (cần nhiều dinh dưỡng), hãy trồng đậu (giúp cải tạo đất). Việc này phá vỡ vòng đời của sâu bệnh và cân bằng dinh dưỡng trong đất.'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Xen canh & trồng bạn: '), 'Trồng nhiều loại cây khác nhau cùng lúc. Ví dụ, trồng húng quế gần cà chua có thể xua đuổi một số loại sâu hại. Trồng ngô xen đậu tương giúp cây ngô được cung cấp thêm đạm.'),
        React.createElement('h3', { className: 'text-xl font-bold mb-3 mt-5 text-[var(--primary-dark)]' }, 'Nuôi Dưỡng Đất Mẹ'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Sử dụng cây che phủ: '), 'Vào cuối mùa vụ, thay vì để đất trống, hãy trồng các loại cây che phủ như cỏ ba lá hoặc đậu. Chúng sẽ bảo vệ đất khỏi xói mòn, ngăn chặn cỏ dại, và khi được cày vùi vào đất, chúng trở thành "phân xanh" bổ sung chất hữu cơ.'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Làm đất tối thiểu (No-Till): '), 'Hạn chế việc cày xới đất quá nhiều. Việc này giúp bảo vệ cấu trúc tự nhiên của đất, giữ lại độ ẩm, và không làm xáo trộn hệ sinh vật đất có lợi như giun đất và vi sinh vật.'),
        React.createElement('h3', { className: 'text-xl font-bold mb-3 mt-5 text-[var(--primary-dark)]' }, 'Hệ Sinh Thái Cân Bằng'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Quản lý dịch hại tổng hợp (IPM): '), 'Đây là một cách tiếp cận toàn diện, ưu tiên các giải pháp tự nhiên và ít độc hại nhất. IPM kết hợp việc theo dõi sâu bệnh, sử dụng thiên địch, và chỉ dùng thuốc hóa học khi thật sự cần thiết.'),
        React.createElement('p', { className: 'mb-2' }, React.createElement('b', null, 'Tạo đa dạng sinh học: '), 'Trồng hoa và cây bụi bản địa xung quanh khu vực canh tác để thu hút các loài thụ phấn (ong, bướm) và côn trùng có ích. Một hệ sinh thái đa dạng sẽ khỏe mạnh và tự cân bằng hơn.')
      ),
    },
];

export const QUIZ_POOLS: Record<string, QuizQuestion[]> = {
  bai1: [
    {qKey: 'quiz.q1.0.q', oKey: 'quiz.q1.0.o', a: 1},
    {qKey: 'quiz.q1.1.q', oKey: 'quiz.q1.1.o', a: 0},
    {qKey: 'quiz.q1.2.q', oKey: 'quiz.q1.2.o', a: 2},
    {qKey: 'quiz.q1.3.q', oKey: 'quiz.q1.3.o', a: 1},
    {qKey: 'quiz.q1.4.q', oKey: 'quiz.q1.4.o', a: 0},
    {qKey: 'quiz.q1.5.q', oKey: 'quiz.q1.5.o', a: 2},
    {qKey: 'quiz.q1.6.q', oKey: 'quiz.q1.6.o', a: 1},
    {qKey: 'quiz.q1.7.q', oKey: 'quiz.q1.7.o', a: 0},
  ],
  bai2: [
    {qKey: 'quiz.q2.0.q', oKey: 'quiz.q2.0.o', a: 0},
    {qKey: 'quiz.q2.1.q', oKey: 'quiz.q2.1.o', a: 2},
    {qKey: 'quiz.q2.2.q', oKey: 'quiz.q2.2.o', a: 1},
    {qKey: 'quiz.q2.3.q', oKey: 'quiz.q2.3.o', a: 1},
    {qKey: 'quiz.q2.4.q', oKey: 'quiz.q2.4.o', a: 0},
    {qKey: 'quiz.q2.5.q', oKey: 'quiz.q2.5.o', a: 2},
    {qKey: 'quiz.q2.6.q', oKey: 'quiz.q2.6.o', a: 0},
    {qKey: 'quiz.q2.7.q', oKey: 'quiz.q2.7.o', a: 1},
  ],
  bai3: [
    {qKey: 'quiz.q3.0.q', oKey: 'quiz.q3.0.o', a: 1},
    {qKey: 'quiz.q3.1.q', oKey: 'quiz.q3.1.o', a: 0},
    {qKey: 'quiz.q3.2.q', oKey: 'quiz.q3.2.o', a: 2},
    {qKey: 'quiz.q3.3.q', oKey: 'quiz.q3.3.o', a: 1},
    {qKey: 'quiz.q3.4.q', oKey: 'quiz.q3.4.o', a: 0},
    {qKey: 'quiz.q3.5.q', oKey: 'quiz.q3.5.o', a: 2},
    {qKey: 'quiz.q3.6.q', oKey: 'quiz.q3.6.o', a: 0},
    {qKey: 'quiz.q3.7.q', oKey: 'quiz.q3.7.o', a: 1},
  ],
};