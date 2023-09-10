export default function Surah_list({englishName, number, name, numberOfAyahs, revelationType, fullData}) {
    console.log(fullData);
    return (
        <>
            <div className='flex items-center p-4 m-4 border-2 border-blue-500 rounded-xl hover:bg-orange-200' 
            onClick={()=>{document.getElementById('my_modal_5').showModal()}}>
                <p className='mr-5'>{number}</p>
            <div>
            <p id="surahName">{name}  ({englishName})</p>
            <p>{revelationType} - {numberOfAyahs} Ayah</p>
            </div>
        </div>
 
        </>
    )
}

