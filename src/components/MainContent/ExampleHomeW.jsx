import { useState } from 'react';

export default function ExampleHomeW() {
      //* Confirm Activation BOX
    const [isActivated, setIsActivated] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    function handleActivate(){
        setIsAlertVisible(true);
    }
    function handleConfirm(){
        setIsActivated(true);
        setIsAlertVisible(false);
    }
    function handleCancel(){
        setIsActivated(false);
        setIsAlertVisible(false);
    }

    //* BT Button Click
    const [isActive, setIsActive] = useState(false);
    function handleToggle(){setIsActive((prev) => !prev);}
    
    // Bọc cả hai section trong một Fragment
    return (
        <div> 
            <section  >
              <div 
                id="examples" 
                style={{ 
                  display: 'flex',
                  justifyContent: 'center', // Căn giữa theo chiều ngang
                  alignItems: 'center',     // Căn giữa theo chiều dọc
                }}
              >
                <menu style={{
                  padding: '2rem',
                  border: 'none', /* Loại bỏ border nếu có */
                  borderRadius: '12px', // Dùng camelCase cho borderRadius
                  backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dùng camelCase cho backgroundColor
                  display: 'inline-block',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Dùng camelCase cho boxShadow
                }}>
                  {!isActivated && !isAlertVisible && (
                    <button onClick={handleActivate}>Actives</button>
                  )}
                  
                  {isAlertVisible && (
                    <div id="tab-content">
                    <h2>Warming!</h2>
                    <p>Are you sure you want to activate this mode?</p>
                    <button onClick={handleConfirm} className='confirm-btn' >Confirm</button>
                    <button onClick={handleCancel} className='cancel-btn' >Cancel</button>
                  </div>
                  )}

                  {isActivated && (
                    <h3 className='success-message'>Mode Activated</h3>
                  )}
                </menu>
              </div>
            </section>

            <section 
              style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                color: '#ffffff',
                textAlign: 'center',
                overflow: 'hidden', 
                minHeight: '30vh', // Kích thước nhỏ vừa đủ
                width: '100%'     // Kích thước nhỏ vừa đủ
              }}
            >
              <div 
                style={{
                  padding: '2rem',
                  border: 'none', /* Loại bỏ border nếu có */
                  borderRadius: '12px', // Dùng camelCase cho borderRadius
                  backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dùng camelCase cho backgroundColor
                  display: 'inline-block',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Dùng camelCase cho boxShadow
                }}
              >
                <p>BUTTON</p>
                <p className={isActive? "actives" : undefined}>Click vào đây!!</p>
                <button className='btn-toggle' onClick={handleToggle}>Toggle btn</button>
              </div>
            </section>
        </div>
    );
}
