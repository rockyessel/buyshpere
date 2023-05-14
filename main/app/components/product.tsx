import Image from 'next/image';

function ProductCard({ content }: any) {
  // console.log('contents', content);
  return (
    <>
      <div className='card bg-white w-[300px] h-[350px] m-2 rounded-lg shadow-lg'>
        <div className='top'>
          <Image
            width={300}
            height={300}
            className='w-[300px] h-[200px] object-cover  p-2'
            src={content?.imageurl}
            alt='img'
          />
        </div>
        <div className='bottom flex flex-col justify-center contents-start p-3 bg-'>
          <div className='title font-semibold text-xs my-1'>
            {content?.name}
          </div>
          <div className='category text-xs font-light my-1'>
            5.4 cm (6.1-inch) display1
          </div>

          <div className='pricing flex contents-center'>
            {' '}
            <div className='price '>{content?.price}</div>
            <div className='ml-2 text-xs '>
              $<del>1320</del>
            </div>
          </div>
          <div className='flex contents-center my-2'>
            <button className='border px-3 py-1 text-xs rounded-lg mr-1 '>
              Buy Now
            </button>
            <button className='border px-3 py-1 text-xs rounded-lg '>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
