import TableRow from './TableRow';

const Table = ({ products }) => {
    return (
        <div className='relative overflow-x-auto'>
            <table className="table-auto w-full">
                <thead>
                    <tr className='bg-tableHead text-black py-3 mb-2 lg:grid grid-cols-11'>
                        <th className='p-3 lg:p-0'>SL</th>
                        <th className='p-3 lg:p-0'>Asset No.</th>
                        <th className='p-3 lg:p-0'>Category</th>
                        <th className='p-3 lg:p-0'>Image</th>
                        <th className='col-span-2 p-3 lg:p-0'>Product Name</th>
                        <th className='p-3 lg:p-0'>Serial No.</th>
                        <th className='p-3 lg:p-0'>Price</th>
                        <th className='p-3 lg:p-0'>Warranty</th>
                        <th className='p-3 lg:p-0'>Purchase Date</th>
                        <th className='p-3 lg:p-0'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (products && products.length > 1) ? products.map(
                            (product, i) => <TableRow
                                key={product.id}
                                index={i}
                                product={product}
                            ></TableRow>) :
                            <TableRow
                                key={products.id}
                                index={0}
                                product={products}
                            ></TableRow>
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Table;