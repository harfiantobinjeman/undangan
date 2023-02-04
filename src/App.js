import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={(theme)=>({
      backgroundColor:'pink',
      [theme.breakpoints.down('lg')]: {
        backgroundColor: 'pink',
      },
    })}>
      <ReactAudioPlayer
          autoPlay={true}
          src="Westlife - Beautiful in white (Lyrics).mp3" //any url
          onPlay={e => console.log("onPlay")}
        />
      <Carousel variant="dark" interval={6000}>
      <Carousel.Item>
      
        <Box sx={(theme)=>({
            height:'100%',
            [theme.breakpoints.down('lg')]: {
              backgroundColor: 'pink',
              height:'650px',
            },
          })}>
            <img
              className="d-block w-100"
              src="https://4.bp.blogspot.com/-AiqF5zYlSzU/XKXlmganu2I/AAAAAAAAE9I/3itdh9UCVlk2dAhRW4ZsoImCH105dtSawCLcBGAs/s1600/Gambar%2BBunga%2BSakura%2BPutih.gif"
              alt="First slide"
              style={{height:'100%'}}
            />
        </Box>
        <Carousel.Caption style={{
          position: 'absolute',
          left: 'center',
          top: '10px',
        }}>
          <Box className='container'>
          <h3 className='bergerak font-effect-3d'>YOU'RE INVITED TO</h3>
          </Box>
          <Box className='container'>
          <h3 className='bergerak font-effect-3d' >THE WEDDING OFF</h3>
          </Box>
          <Box className='Namas'
          sx={(theme)=>({
            position:'absolute',
            left:'240px',
            top:'120px',
            [theme.breakpoints.down('lg')]: {
              position:'absolute',
              left:'10px',
              top:'190px',
            },
          })}>
            <p className='font-effect-3d'>N</p>
          </Box>
          <Box className='Namas'
          sx={(theme)=>({
            position:'absolute',
            left:'530px',
            top:'220px',
            [theme.breakpoints.down('lg')]: {
              position:'absolute',
              left:'300px',
              top:'240px',
            },[theme.breakpoints.down('sm')]: {
              position:'absolute',
              left:'180px',
              top:'240px',
            }
          })}>
            <p className='font-effect-3d'>R</p>
          </Box>
          <Box className='Namas'
          sx={(theme)=>({
            position:'absolute',
            left:'260px',
            top:'180px',
            [theme.breakpoints.down('lg')]: {
              position:'absolute',
              left:'80px',
              top:'240px',
            },
          })}>
            <img
              className="d-block w-50"
              src="love.png"
              alt="First slide"
              style={{
                height:'150px',
              }}
            />
      </Box>
        </Carousel.Caption>
        <Carousel.Caption style={{
          position: 'absolute',
          left: 'center',
          top: '450px',
        }}>
          <Box className='container'>
          <h3 className='Nama font-effect-3d'>NELLI & RAFIQ</h3>
          </Box>
          <p>18 February 2023</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Box sx={(theme)=>({
            height:'100%',
            [theme.breakpoints.down('lg')]: {
              backgroundColor: 'pink',
              height:'650px',
            },
          })}>
        <img
          className="d-block w-100 h-100"
          src="https://2.bp.blogspot.com/-MPC0k2TmP_k/XKXlmX9X0HI/AAAAAAAAE9E/KI1BrXc3dJYRIHayGrrOBqfe_JmrVZ1kgCLcBGAs/s1600/Gambar%2BBunga%2BSakura%2BJepang.gif"
          alt="Second slide"
        />
        </Box>
        <Carousel.Caption style={{
          position: 'absolute',
          left: 'center',
          top: '10px',
        }}>
          <h5>السلام عليكم ورحمة الله وبركاته</h5>
          <h5>Assalamualaikum Warahmatullahi Wabarakatuh</h5>
          <h5>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk Menghadiri acara pernikahan kami</h5>
        </Carousel.Caption>
        <Carousel.Caption style={{
          position: 'absolute',
          left: 'center',
          top: '250px',
        }}>
          <h5 className='Nama font-effect-3d'>Nelli Hardianti</h5>
          <h6>Putri dari Bapak Sahdani dan Rosita</h6>
        </Carousel.Caption>
        <Carousel.Caption style={{
          position: 'absolute',
          left: 'center',
          top: '370px',
        }}>
          <h5>dengan</h5>
        </Carousel.Caption>
        <Carousel.Caption style={{
          position: 'absolute',
          left: 'center',
          top: '450px',
        }}>
          <h5 className='Nama font-effect-3d'>Muhammad Rafiq</h5>
          <h6>Putri dari Bapak Ahmad sudiyantoro dan Monalisa</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Box sx={(theme)=>({
            height:'100%',
            [theme.breakpoints.down('lg')]: {
              backgroundColor: 'pink',
              height:'650px',
            },
          })}>
        <img
          className="d-block w-100 h-100"
          src="https://1.bp.blogspot.com/-PrAtrnmrk1s/XKXlrD_Kc7I/AAAAAAAAE9U/9Zp1sHQ5OC4S0whw45Q24JLCyWyhkdnrACLcBGAs/s1600/Gambar%2BMusim%2BBunga%2BSakura.gif"
          alt="Third slide"
        />
        </Box>
        <Carousel.Caption style={{
          position: 'absolute',
          left: 'center',
          top: '10px',
        }}>
          <h3>Save The Date</h3>
          <p>
            Yang Insya Allah akan dilaksanakan pada :
          </p>
          <h3>Sabtu , 18 February 2023</h3>
          <h1>February</h1>
	<table>
		<tr>
			<th>Minggu</th>
			<th>Senin</th>
			<th>Selasa</th>
			<th>Rabu</th>
			<th>Kamis</th>
			<th>Jumat</th>
			<th>Sabtu</th>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>4</td>
		</tr>
		<tr>
			<td id="red">5</td>
			<td>6</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
		</tr>
		<tr>
			<td id="red">12</td>
			<td>13</td>
			<td>14</td>
			<td>15</td>
			<td>16</td>
			<td>17</td>
			<td style={{backgroundColor:'pink'}} id='red'>18</td>
		</tr>
		<tr>
			<td id="red">19</td>
			<td>20</td>
			<td>21</td>
			<td>22</td>
			<td>23</td>
			<td>24</td>
			<td>25</td>
		</tr>
		<tr>
			<td id="red">26</td>
			<td>27</td>
			<td>28</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</table>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Box>
  );
}

export default App;
