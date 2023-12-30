import { useRef, useState } from 'react';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache, InfiniteLoader } from 'react-virtualized';
import { faker } from '@faker-js/faker/locale/fa';
import Divider from './Divider';

const ReactVirtualized = () => {

  const cache = useRef(new CellMeasurerCache({
    fixedWidth: false,
    defaultHeight: 200
  }));

  const [count, setCount] = useState<{
    id: number;
    name: string;
    sex: string;
    bio: string;
    job: string;
    email: string;
    avatar: string;
  }[]>([])

  const addNewItem = () => {
    setCount(
      [...Array(1000).keys()].map(key => {
        return {
          id: key,
          name: faker.person.fullName(),
          sex: faker.person.sex(),
          bio: faker.person.bio(),
          job: faker.person.jobTitle(),
          email: faker.internet.email(),
          avatar: faker.image.avatar()
        }
      })
    )
  }

  const LOADING = 1;
  const LOADED = 2;

  let itemStatusMap: any = {};
  const isRowLoaded = ({ index }: any) => !!itemStatusMap[index];

  const loadMoreRows = async ({ startIndex, stopIndex }: any) => {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LOADING;
    }

    await new Promise((r) => setTimeout(r, 1000));

    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LOADED;
    }
  };

  return (
    <div className="w-full h-screen py-8 flex flex-col gap-16">
      <h1 className='title'>ReactVirtualized</h1>

      <button className='btnSuccess' onClick={addNewItem}>Add +</button>

      <div className='flex flex-row gap-8'>

        <div className='w-1/2 h-screen text-center' style={{ direction: 'rtl' }}>
          <h2 className='subtitle'>AutoSizer</h2>
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowCount={count.length}
                rowHeight={cache.current.rowHeight({ index: 0 }) + 200}
                deferredMeasurementCache={cache.current}
                rowRenderer={({ key, index, style, parent }: any) => (
                  <CellMeasurer key={key} cache={cache.current} parent={parent} rowIndex={index} columnIndex={0}>
                    <ul style={style}>
                      <li>آیدی: {count[index].id}</li>
                      <li>نام: {count[index].name}</li>
                      <li>مرد یا زن: {count[index].sex}</li>
                      <li>بیو: {count[index].bio}</li>
                      <li>شغل: {count[index].job}</li>
                      <li>ایمیل: {count[index].email}</li>
                      <img className='w-28 h-28 mx-auto rounded-2xl' src={count[index].avatar} alt="User Avatar" />
                      <Divider />
                    </ul>
                  </CellMeasurer>
                )}
              />
            )}
          </AutoSizer>
        </div>

        <div className='w-1/2 h-screen text-center' style={{ direction: 'rtl' }}>
          <h2 className='subtitle'>InfiniteLoader</h2>
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={count.length}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                width={window.innerWidth / 2}
                height={window.innerHeight - 150}
                rowCount={count.length}
                rowHeight={cache.current.rowHeight({ index: 0 }) + 200}
                deferredMeasurementCache={cache.current}
                rowRenderer={({ key, index, style, parent }: any) => (
                  <CellMeasurer key={key} cache={cache.current} parent={parent} rowIndex={index} columnIndex={0}>
                    <ul style={style}>
                      <li>آیدی: {count[index].id}</li>
                      <li>نام: {count[index].name}</li>
                      <li>مرد یا زن: {count[index].sex}</li>
                      <li>بیو: {count[index].bio}</li>
                      <li>شغل: {count[index].job}</li>
                      <li>ایمیل: {count[index].email}</li>
                      <img className='w-28 h-28 mx-auto rounded-2xl' src={count[index].avatar} alt="User Avatar" />
                      <Divider />
                    </ul>
                  </CellMeasurer>
                )}
              />
            )}
          </InfiniteLoader>
        </div>

      </div>
    </div>
  )
}

export default ReactVirtualized