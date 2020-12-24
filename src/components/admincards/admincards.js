import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Navbar from '../navbar/navbar';
import Button from '@material-ui/core/Button';
import '../personal/personal.css';
import AdminMessageCard from './messageadmincard';
import AssignCoreMembersPopup from '../Popups/AssignCoreMembersPopup';

const useStyles = makeStyles((theme) => ({
  margi: {
    borderRadius: '15px',
    backgroundColor: ' #E7B8B8',
  },
  Gin: {
    marginTop: '8px',
    marginRight: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  jojo: {
    margin: '10px',
  },
  jin: {
    marginTop: '8px',
  },
  border: {
    borderBottom: '4px solid #FC0404',
    borderWidth: '50%',
    // borderRadius: '12.5px',
  },
  border1: {
    borderBottom: '4px solid #FFD94D',
    borderWidth: '50%',
    // borderRadius: '12.5px',
  },
  border2: {
    borderBottom: '4px solid #4CBC14',
    borderWidth: '50%',
    // borderRadius: '12.5px',
  },
  button: {
    backgroundColor: '#EF4646',
    color: 'white',
    borderRadius: '25px',
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
    height: '3rem',
    textTransform: 'none',
    '&:hover': {
      background: '#EF4646',
      color: 'white',
    },
    fontFamily: 'Oxygen',
  },
}));

export default function AdminCards({ name, bitsId }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [n, setn] = useState(' ');
  var k = 50;
  console.log(checked);
  console.log(checked1);
  const list = Array(60).fill('Ye bhi thik hai. :/');

  const handleChange10 = () => {
    if (checked1 === true) {
      setChecked1(!checked1);
    }
    setValue(' ');

    setChecked(!checked);
    console.log(checked);
    if (checked === false) {
      setn(10);
    } else setn(0);
  };

  const handleChange20 = () => {
    if (checked === true) {
      setChecked(!checked);
    }
    setValue(' ');
    setChecked1(!checked1);
    if (checked1 === false) {
      setn(25);
    } else setn(0);
  };

  const [value, setValue] = useState(' ');

  const handleClick = (e) => {
    if (checked == true) {
      setChecked(!checked);
    }
    if (checked1 == true) {
      setChecked1(!checked1);
    }
    setValue(' ');
    setn(n + 50);
  };

  const handleChangeinput = (event) => {
    if (checked == true) {
      setChecked(!checked);
    }
    if (checked1 == true) {
      setChecked1(!checked1);
    }

    setValue(event.target.value);
    if (value == ' ') {
      setn(30);
    }
    setn(event.target.value);
  };
  var block = 'block';
  var none = 'none';
  const [color, setColor] = useState('#FB8989');

  const boxClick = (e) => {
    setColor('#FFFDE8');
    setColor1('#FB8989');
  };

  const [color1, setColor1] = useState('#FB8989');

  const boxClick1 = (e) => {
    setColor1('#FFFDE8');
    setColor('#FB8989');
  };

  return (
    <React.Fragment>
      <div className="clue">
        <Navbar navHeading="Admin DashBoard" name={name} bitsId={bitsId} />
        <div className="crux" bgcolor="#EF4646">
          <Box display="flex" bgcolor="#EF4646">
            <Box width="10%"></Box>
            <Box
              p={0.8}
              style={{ backgroundColor: color, textTransform: 'none' }}
              className="rad"
              width="61%"
              textAlign="center"
            >
              <Button
                onClick={boxClick}
                style={{ fontWeight: '700', textTransform: 'none' }}
                size="large"
                className="margi"
              >
                <b> Pending Messages</b>
              </Button>
            </Box>
            <Box bgcolor="#EF4646" width="20%"></Box>
            <Box
              p={0.8}
              style={{ backgroundColor: color1, textTransform: 'none' }}
              width="61%"
              className="rad"
              textAlign="center"
              flexShrink={1}
            >
              <Button
                onClick={boxClick1}
                style={{ fontWeight: '700', textTransform: 'none' }}
                size="large"
                className="margi"
              >
                <b> Final Approval</b>
              </Button>
            </Box>
            <Box width="10%"></Box>
          </Box>
        </div>

        <div className="color" style={{ backgroundColor: '#FFFDE8' }}>
          <div className="margin">
            <Box display="flex" flexDirection="row" p={1} m={1}>
              <Box p={1} flexGrow={1}></Box>
              <Box
                p={1}
                flexGrow={1}
                style={{ textTransform: 'none' }}
                textAlign="center"
                className={classes.border}
              >
                <Button
                  size="medium"
                  style={{
                    textTransform: 'none',
                    fontFamily: 'Oxygen',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  <b>Red Flagged</b>
                </Button>
              </Box>
              <Box p={1} flexGrow={2}></Box>

              <Box
                p={1}
                flexGrow={1}
                style={{ textTransform: 'none' }}
                textAlign="center"
                className={classes.border1}
              >
                <Button
                  size="medium"
                  style={{
                    textTransform: 'none',
                    fontFamily: 'Oxygen',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  <b>Yellow Flagged</b>
                </Button>
              </Box>
              <Box p={1} flexGrow={2}></Box>
              <Box
                p={1}
                flexGrow={1}
                style={{ textTransform: 'none' }}
                textAlign="center"
                className={classes.border2}
              >
                <Button
                  size="medium"
                  style={{
                    textTransform: 'none',
                    fontFamily: 'Oxygen',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  <b>Green Flagged</b>
                </Button>
              </Box>
              <Box p={1} flexGrow={1}></Box>
            </Box>
          </div>

          <div className="chez">
            <Box display="flex" flexDirection="row" p={1} m={1}>
              <Box
                p={1}
                flexGrow={1}
                marginLeft="30px"
                marginTop="8px"
                style={{
                  textTransform: 'none',
                  fontFamily: 'Oxygen',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                }}
              >
                <b>Select</b>
              </Box>
              <Box p={1} flexGrow={4}></Box>
              <Box p={1} flexGrow={1}>
                <div className="sorrow">
                  <div className="sorrow1">First 10</div>
                  <div className="sorrow2">
                    <svg
                      onClick={handleChange10}
                      display={checked == false ? block : none}
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.44 2H12C6.47715 2 2 6.47715 2 12V25C2 30.5228 6.47715 35 12 35H25C30.5228 35 35 30.5228 35 25V11.9"
                        stroke="#EF4646"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      onClick={handleChange10}
                      display={checked == true ? block : none}
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 42 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.7491 3H12C6.47715 3 2 7.47715 2 13V26C2 31.5228 6.47715 36 12 36H25.4545C30.9774 36 35.4545 31.5228 35.4545 26V12.9"
                        stroke="#EF4646"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.35266 20.4977L13.679 25.2532C15.7919 26.8415 18.776 26.5108 20.4899 24.4985L38.7999 3"
                        stroke="#EF4646"
                        stroke-width="5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </Box>
              <Box p={1} flexGrow={4}></Box>
              <Box p={1} flexGrow={1}>
                <div className="sorrow">
                  <div className="sorrow1">First 25</div>
                  <div className="sorrow2">
                    <svg
                      onClick={handleChange20}
                      display={checked1 == false ? block : none}
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.44 2H12C6.47715 2 2 6.47715 2 12V25C2 30.5228 6.47715 35 12 35H25C30.5228 35 35 30.5228 35 25V11.9"
                        stroke="#EF4646"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      width="2rem"
                      onClick={handleChange20}
                      height="2rem"
                      display={checked1 == true ? block : none}
                      viewBox="0 0 42 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.7491 3H12C6.47715 3 2 7.47715 2 13V26C2 31.5228 6.47715 36 12 36H25.4545C30.9774 36 35.4545 31.5228 35.4545 26V12.9"
                        stroke="#EF4646"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.35266 20.4977L13.679 25.2532C15.7919 26.8415 18.776 26.5108 20.4899 24.4985L38.7999 3"
                        stroke="#EF4646"
                        stroke-width="5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </Box>
              <Box p={1} flexGrow={4}></Box>
              <Box p={1} flexGrow={1} marginTop="7.5px">
                First
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax={4}
                  value={value}
                  name="hel"
                  onChange={handleChangeinput}
                />
              </Box>
            </Box>
          </div>

          <div className="terov">
            {list.slice(n, n + 50).map((message, index) => (
              <AdminMessageCard
                message={message}
                rollNumber={'2019A8PS0666G'}
                message={message}
                date={'28th Dec 2020, 2:31 a.m.'}
                n={n}
                index={index}
              />
            ))}
          </div>

          <div className="terova">
            <div className="check"></div>
            <Box display="flex" flexDirection="row" p={1} m={1}>
              <Box p={1} flexGrow={0.25}></Box>
              <Box p={1} flexGrow={1} textAlign="center">
                <Button
                  size="large"
                  variant="contained"
                  className={classes.button}
                >
                  Reject
                </Button>
              </Box>
              <Box p={1} flexGrow={4}></Box>
              <Box p={1} flexGrow={1} textAlign="center">
                <Button
                  size="medium"
                  style={{
                    textTransform: 'none',
                    fontFamily: 'Oxygen',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '22px',
                  }}
                  onClick={handleClick}
                >
                  <b style={{ marginRight: '11px' }}>Next 50 </b>
                  <svg
                    className=".a_head"
                    width="12"
                    height="22"
                    viewBox="0 0 12 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6899 11.6037L1.51429 21.7512C1.1809 22.0835 0.641125 22.0829 0.30829 21.7495C-0.0242867 21.4161 -0.0234273 20.876 0.310009 20.5435L9.87997 11L0.309665 1.45647C-0.0237282 1.12389 -0.0245876 0.584164 0.307946 0.250727C0.474793 0.08358 0.693375 3.8147e-06 0.911956 3.8147e-06C1.12998 3.8147e-06 1.3477 0.0830212 1.51425 0.249008L11.6899 10.3963C11.8505 10.556 11.9406 10.7734 11.9406 11C11.9406 11.2265 11.8503 11.4437 11.6899 11.6037Z"
                      fill="black"
                    />
                  </svg>
                </Button>
              </Box>
              <Box p={1} flexGrow={4}></Box>
              <Box p={1} flexGrow={1} textAlign="center">
                <AssignCoreMembersPopup />
              </Box>
              <Box p={1} flexGrow={0.25}></Box>
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
