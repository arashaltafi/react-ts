import { useRef, useState } from 'react';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const ReactVirtualized = () => {

  const cache = useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100
  }));

  const [count, setCount] = useState<{
    id: number;
    name: string;
    bio: string;
  }[]>([])

  const addNewItem = () => {
    setCount(
      [...Array(1000).keys()].map(key => {
        return {
          id: key,
          name: 'name',
          bio: 'bio'
        }
      })
    )
  }

  return (
    <div className="w-full h-screen py-8 flex flex-col gap-16">
      <h1 className='title'>ReactVirtualized</h1>

      <button className='btnSuccess' onClick={addNewItem}>Add +</button>

      <div className='w-full h-screen text-center'>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowCount={count.length}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowRenderer={({ key, index, style, parent }: any) => (
                <CellMeasurer key={key} cache={cache.current} parent={parent} rowIndex={index} columnIndex={0}>
                  <ul style={style}>
                    <li>ID {count[index].id}</li>
                    <li>Name {count[index].name}</li>
                  </ul>
                </CellMeasurer>
              )}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  )
}

export default ReactVirtualized