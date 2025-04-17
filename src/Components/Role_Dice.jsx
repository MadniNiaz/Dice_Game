
import Game_Button from './Buttons/Game_Button'

const Role_Dice = ({ currentDice, role_Dice }) => {



    return (
        <div className='h-fit flex flex-col justify-center items-center  mt-8'>
            <div className=' flex justify-center flex-col items-center p-4'>
                <div  >
                    <img src={`/images/Dice_Pics/dice_${currentDice}.png`} alt='dice_1' onClick={role_Dice} />
                </div>
                <p className='mt-3'>Click on dice to roll</p>

            </div>
        </div>
    )
}

export default Role_Dice