import React from 'react';
import PropTypes from 'prop-types';
import CourseList from './Courses';

Courses.propTypes = {
    
};

function Courses(props) {

    const courseItems = [
        {
          "id": 7,
          "title": "Kiến Thức Nhập Môn IT",
          "slug": "lessons-for-newbie",
          "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
          "image": "courses/7.png",
          "icon": "courses/7/6200b81f52d83.png",
          "video_type": "youtube",
          "video": "M62l1xA5Eu8",
          "old_price": 0,
          "price": 0,
          "pre_order_price": 0,
          "students_count": 110349,
          "is_pro": false,
          "is_coming_soon": false,
          "is_selling": false,
          "published_at": "2020-02-10T14:23:13.000000Z",
          "is_registered": true,
          "user_progress": 100,
          "last_completed_at": "2022-08-04 16:43:51",
          "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
          "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png",
          "video_url": "https://www.youtube.com/watch?v=M62l1xA5Eu8",
          "landing_page_url": "/courses/lessons-for-newbie",
          "is_pre_order": false,
          "is_published": true
        },
        {
          "id": 21,
          "title": "Lập trình C++ cơ bản, nâng cao",
          "slug": "lap-trinh-c-co-ban-toi-nang-cao",
          "description": "Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.",
          "image": "courses/21/63e1bcbaed1dd.png",
          "icon": "courses/21/63e1bcbb2dec5.png",
          "video_type": "youtube",
          "video": "Da1tpV9TMU0",
          "old_price": 0,
          "price": 0,
          "pre_order_price": 0,
          "students_count": 11563,
          "is_pro": false,
          "is_coming_soon": false,
          "is_selling": false,
          "published_at": "2023-02-07T02:51:00.000000Z",
          "is_registered": false,
          "user_progress": 0,
          "last_completed_at": null,
          "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png",
          "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbb2dec5.png",
          "video_url": "https://www.youtube.com/watch?v=Da1tpV9TMU0",
          "landing_page_url": "/courses/lap-trinh-c-co-ban-toi-nang-cao",
          "is_pre_order": false,
          "is_published": true
        },
        {
          "id": 2,
          "title": "HTML CSS từ Zero đến Hero",
          "slug": "html-css",
          "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
          "image": "courses/2.png",
          "icon": "courses/2/6200aecea81de.png",
          "video_type": "youtube",
          "video": "R6plN3FvzFY",
          "old_price": 0,
          "price": 0,
          "pre_order_price": 0,
          "students_count": 166012,
          "is_pro": false,
          "is_coming_soon": false,
          "is_selling": false,
          "published_at": "2020-02-10T14:23:13.000000Z",
          "is_registered": true,
          "user_progress": 68,
          "last_completed_at": "2023-06-20 11:02:00",
          "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
          "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/2/6200aecea81de.png",
          "video_url": "https://www.youtube.com/watch?v=R6plN3FvzFY",
          "landing_page_url": "/courses/html-css",
          "is_pre_order": false,
          "is_published": true
        },
    ]

    return (
        <div>
            <CourseList props = {courseItems}/>
        </div>
    );
}

export default Courses;