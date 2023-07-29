interface IProps{
    name?: string;
    youHit?: () => void;

}
function FirstTest(props: IProps) {
    const {name} = props;
    const youHit = () => {
        console.log("yeah hitt it")
    }
  return (
    <>
    <div>
        Hello {name}
    </div>
    <button onClick={youHit}> you need to hit</button>
    </>
  );
}

export default FirstTest;
