const styles: Record<string, Partial<React.CSSProperties>> = {
  frame: {
    border: '1px solid',
    borderRadius: '8px',
    width: 100,
    padding: '2px'
  },
  frameNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid',
    height: '25px',
  },
  scoreSet: {
    display: 'flex',
    height: '30px'
  },
  firstScore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  },
  secondScore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid',
    borderBottom: '1px solid',
    borderRadius: '0 0 0 8px',
    width: '50%',
    height: '100%',
  },
  totalScore: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    height: '40px',
  }
}

const Frame = ({ frame, firstScore, secondScore, totalScore }: IFrame) => {
  return (
    <div style={styles.frame}>
      <div style={styles.frameNumber}><p>{frame}</p></div>
      <div style={styles.scoreSet}>
        <div style={styles.firstScore}><p>{firstScore === 0 ? '' : firstScore}</p></div>
        <div style={styles.secondScore}><p>{secondScore === 0 ? '' : secondScore}</p></div>
      </div>
      <div style={styles.totalScore}><p>{totalScore === 0 ? '' : totalScore}</p></div>
    </div>
  )
}

export default Frame;
