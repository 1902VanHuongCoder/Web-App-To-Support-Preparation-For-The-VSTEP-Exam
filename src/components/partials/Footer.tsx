const Footer = () => {
    return (
        <div className='relative bottom-0 w-full px-5 sm:px-20 py-5 bg-[#37B7C3] mt-10 rounded-tr-3xl rounded-tl-3xl shadow-xl flex flex-col sm:flex-row gap-x-10 text-white font-custom'>
            <div className='basis-1/2'>
                <p className='font-bold text-xl'><span className="text-[#071952]">VSTEP</span>REVIEW</p>
                <p className='mt-5 font-semibold'>
                    VSTEPREVIEW wesite giúp bạn dễ dàng hơn trong việc học tiếng anh.  VSTEPREVIEW bí quyết chinh phục tiếng anh từ A đến Z!
                </p>
            </div>
            <div className='basis-1/2 mt-10 sm:mt-0'>
                <p className='font-bold text-xl text-[#071952]'>Liên Hệ</p>
                <p className='mt-5'>
                    Email: <span className='font-bold'>tovanhuong@gmail.com</span>
                </p>
                <p>
                    SĐT: <span className='font-bold'>078.###.####</span>
                </p>
                <p>
                    Design: <span className='font-bold'>lehuuhoanganh@gmail.com</span>
                </p>
                <p>
                    Last updated: <span className='font-bold'>July 13, 2024</span>
                </p>
            </div>
        </div>
    )
}

export default Footer