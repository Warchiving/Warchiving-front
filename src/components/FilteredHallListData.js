// components/FilteredHallListData.js

const filteredHallList = [
    {
      id: 5,
        halltag1: '예쁜 웨딩홀',
        halltag2: '플라워',
        name: '상록아트홀',
        location: '서울특별시 강남구',
        price: '8,900,000원부터 시작',
        capacity: '최소 280명', // 수용 인원 
        mealPrice: '89,000원', // 식대
        venueFee: '8,900,000원', // 대관료
        image: require('../../assets/HallList/Hall5.png'), //리스트 이미지
        detailImages: [ // 디테일 이미지 배열
          require('../../assets/HallDetail/Detail12.png'),
          require('../../assets/HallDetail/Detail13.png'),
          require('../../assets/HallDetail/Detail14.png')
        ],
    },
    {
      id: 6,
        halltag1: '예쁜 웨딩홀',
        halltag2: '교통 편의',
        name: '르비르모어 선릉',
        location: '서울특별시 강남구',
        price: '11,000,000원부터 시작',
        capacity: '최소 250명', // 수용 인원 
        mealPrice: '108,000원', // 식대
        venueFee: '11,000,000원', // 대관료
        image: require('../../assets/HallList/Hall6.png'), //리스트 이미지
        detailImages: [ // 디테일 이미지 배열
          require('../../assets/HallDetail/Detail15.png'),
          require('../../assets/HallDetail/Detail16.png'),
          require('../../assets/HallDetail/Detail17.png')
        ],
    },
    {
      id: 7,
        halltag1: '예쁜 웨딩홀',
        halltag2: '컨벤션',
        name: '소노펠리체컨벤션',
        location: '서울특별시 강남구',
        price: '8,000,000원부터 시작',
        capacity: '최소 350명', // 수용 인원 
        mealPrice: '77,000~95,000원', // 식대
        venueFee: '8,000,000원', // 대관료
        image: require('../../assets/HallList/Hall7.png'), //리스트 이미지
        detailImages: [ // 디테일 이미지 배열
          require('../../assets/HallDetail/Detail18.png'),
          require('../../assets/HallDetail/Detail19.png'),
          require('../../assets/HallDetail/Detail20.png')
        ],
    },
    {
      id: 8,
        halltag1: '식간격',
        halltag2: '예쁜 웨딩홀',
        name: '브라이드밸리',
        location: '서울특별시 강남구',
        price: '6,800,000원부터 시작',
        capacity: '최소 250명', // 수용 인원 
        mealPrice: '69,000원', // 식대
        venueFee: '6,800,000원', // 대관료
        image: require('../../assets/HallList/Hall8.png'), //리스트 이미지
        detailImages: [ // 디테일 이미지 배열
          require('../../assets/HallDetail/Detail21.png'),
          require('../../assets/HallDetail/Detail22.png'),
          require('../../assets/HallDetail/Detail23.png')
        ],
    }
  ];
  
  export default filteredHallList;
  