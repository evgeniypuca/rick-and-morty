import { Button } from './button'

export function Pagination({funcNext, funcPrev}) {
    return (
        <div className='pagination'>
            <Button
                onClick={funcPrev}
                
            >
                <span>Prev</span>
            </Button>
            <Button
                onClick={funcNext}
              
            >
                <span>next</span>
            </Button>
        </div>
    )
}