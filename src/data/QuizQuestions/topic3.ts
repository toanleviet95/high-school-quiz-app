// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const topic3: Topic = {
  topic: 'Thông hiểu',
  level: 'Trung bình',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 300, // seconds
  questions: [
    {
      question: "Tại sao hiệu ứng tâm lý đám đông có thể dẫn đến quyết định sai lầm?",
      choices: [
        "Vì mọi người đều suy nghĩ độc lập",
        "Vì không ai muốn gây xung đột",
        "Vì có quá nhiều ý kiến",
        "Vì mọi người không có cảm xúc",
      ],
      type: "MCQs",
      correctAnswers: ["Vì không ai muốn gây xung đột"],
      score: 10,
    },
    {
      question: "Khi nào hiệu ứng tâm lý đám đông có thể có tác động tích cực?",
      choices: [
        "Khi có sự đồng thuận trong một mục tiêu chung",
        "Khi có sự bất đồng",
        "Khi không có ai tham gia",
        "Khi mọi người tách biệt",
      ],
      type: "MCQs",
      correctAnswers: ["Khi có sự đồng thuận trong một mục tiêu chung"],
      score: 10,
    },
    {
      question: "Một trong những cách để giảm thiểu tác động tiêu cực của hiệu ứng tâm lý đám đông là gì?",
      choices: [
        "Khuyến khích sự đồng thuận",
        "Tăng cường thông tin",
        "Giảm số lượng người tham gia",
        "Tạo ra sự hoảng loạn",
      ],
      type: "MCQs",
      correctAnswers: ["Tăng cường thông tin"],
      score: 10,
    },
    {
      question: "Hiệu ứng tâm lý đám đông có thể dẫn đến hành vi nào sau đây?",
      choices: [
        "Hành vi bình tĩnh",
        "Hành vi bạo lực",
        "Hành vi suy nghĩ độc lập",
        "Hành vi sáng tạo",
      ],
      type: "MCQs",
      correctAnswers: ["Hành vi bạo lực"],
      score: 10,
    },
    {
      question: "Khi một nhóm người tham gia vào một hoạt động từ thiện, điều này thể hiện điều gì?",
      choices: [
        "Sự phân chia",
        "Tinh thần đồng đội",
        "Hành vi bạo lực",
        "Sự hoảng loạn",
      ],
      type: "MCQs",
      correctAnswers: ["Tinh thần đồng đội"],
      score: 10,
    },
    {
      question: "Khi nào hiệu ứng tâm lý đám đông có thể dẫn đến sự thay đổi tích cực trong xã hội?",
      choices: [
        "Khi mọi người cùng nhau hợp tác phát triển",
        "Khi có sự chia rẽ",
        "Khi không có sự tham gia của ai",
        "Khi mọi người tách biệt",
      ],
      type: "MCQs",
      correctAnswers: ["Khi mọi người cùng nhau hợp tác phát triển"],
      score: 10,
    },
    {
      question: "Một ví dụ về tác động tiêu cực của hiệu ứng tâm lý đám đông là gì?",
      choices: [
        "Quyết định hợp lý",
        "Hành vi bạo lực trong đám đông",
        "Sự hỗ trợ lẫn nhau",
        "Tinh thần đồng đội",
      ],
      type: "MCQs",
      correctAnswers: ["Hành vi bạo lực trong đám đông"],
      score: 10,
    },
    {
      question: "Khi một nhóm người cùng nhau trao đổi, điều này có thể dẫn đến điều gì?",
      choices: [
        "Sự tức giận",
        "Tăng cường sự kết nối",
        "Sự im lặng",
        "Không có tác động gì",
      ],
      type: "MCQs",
      correctAnswers: ["Tăng cường sự kết nối"],
      score: 10,
    },
    {
      question: "Cách nào giúp tăng cường sự suy nghĩ độc lập trong đám đông?",
      choices: [
        "Khuyến khích tranh luận",
        "Tạo ra sự đồng thuận",
        "Giảm thông tin",
        "Tạo ra sự hoảng loạn",
      ],
      type: "MCQs",
      correctAnswers: ["Khuyến khích tranh luận"],
      score: 10,
    },
    {
      question: "Một ví dụ về hành vi tích cực trong một đám đông là gì?",
      choices: [
        "Phá hoại",
        "Cùng nhau quyên góp cho nạn nhân thiên tai",
        "Gây rối",
        "Tách biệt khỏi nhóm",
      ],
      type: "MCQs",
      correctAnswers: ["Cùng nhau quyên góp cho nạn nhân thiên tai"],
      score: 10,
    },
  ],
}
