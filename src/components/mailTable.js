import React, { Component, Fragment} from 'react';
import Radium, { Style } from 'radium';
import ShowMap from './showMap';

class MailTable extends Component {

render () {
  const style = {

    tableContainer: {
      height: '100%',
      width: '100%',
    },

    table: {
      border: '1px solid #ccc',
      borderCollapse: 'collapse',
      margin: '0',
      padding: '0',
      width: '100%',
      tableLayout: 'fixed',
      '@media screen and (max-width: 600px)': {
          border: '0',
      }
    },
      
    caption: {
      fontSize: '1.5em',
      margin: '.5em 0 .75em',
      '@media screen and (max-width: 600px)': {
          fontSize: '1.3em',
      }
    },

    thead: {
      '@media screen and (max-width: 600px)': {
            border: 'none',
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: '0',
            position: 'absolute',
            width: '1px',
        }
    },
    
      tr: {
        backgroundColor: '#f8f8f8',
        border: '1px solid #ddd',
        padding: '.35em',
        '@media screen and (max-width: 600px)': {
          borderBottom: '3px solid #ddd',
          display: 'block',
          marginBottom: '.625em',
        }
      },
      
      th: {
        padding: '.625em',
        textAlign: 'center',
        fontSize: '.85em',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
      },

      td: {
        padding: '.625em',
        textAlign: 'center',
        '@media screen and (max-width: 600px)': {
          borderBottom: '1px solid #ddd',
          display: 'block',
          fontSize: '.8em',
          textAlign: 'right',
            ':before': {
                content: 'attr(data-label)',
                float: 'left',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            },
            ':lastChild': {
                    borderBottom: '0',
            }
      }
    }   
  }     
    
    return (
      <Fragment>
        <div style={style.tableContainer}>
          <table style={style.table}>
            <caption style={style.caption}>Statement Summary</caption>
            <thead>
              <tr style={style.tr}>
                <th style={style.th} scope="col">Date Recieved</th>
                <th style={style.th} scope="col">Description</th>
                <th style={style.th} scope="col">Collected?</th>
              </tr>
            </thead>
            <tbody>
              <tr style={style.tr}>
                <td style={style.td} data-label="Account">04/01/2016</td>
                <td style={style.td} data-label="Due Date">small parcel</td>
                <td style={style.td} data-label="Amount">
                  <form action="#">
                    Tick if collected<input type="checkbox" name="collected" value="collected" />
                  </form>
                </td>
              </tr>
              <tr style={style.tr}>
                <td style={style.td} scope="row" data-label="Account">04/01/2016</td>
                <td style={style.td} data-label="Due Date">small parcel</td>
                <td style={style.td} data-label="Amount">
                  <form action="#">
                    Tick if collected<input type="checkbox" name="collected" value="collected" />
                  </form>
                </td>
              </tr>
              <tr style={style.tr}>
                <td style={style.td} scope="row" data-label="Account">04/01/2016</td>
                <td style={style.td} data-label="Due Date">small parcel</td>
                <td style={style.td} data-label="Amount">
                  <form action="#">
                    Tick if collected<input type="checkbox" name="collected" value="collected" />
                  </form>
                </td>
              </tr>
              <tr style={style.tr}>
                <td style={style.td} scope="row" data-label="Acount">04/01/2016</td>
                <td style={style.td} data-label="Due Date">small parcel</td>
                <td style={style.td} data-label="Amount">
                  <form action="#">
                    Tick if collected<input type="checkbox" name="collected" value="collected" />
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
          <Style rules={{
            body: {
              padding: '10%',
              textAlign: 'center',
            },
            mediaQueries: {
              '(max-width: 600px)': {
                body: {
                  padding: '2%'
                }
              }
            }
          }}
          />
        </div>
        <ShowMap />
      </Fragment>
    )
  }
}

export default Radium(MailTable);

