
function xor({isDark}) {
    return (
        <div data-theme={isDark ? "dark" : "light"} className="background">
            <div className="div" set>
                <title>CryptoVisXor</title>

                <h1>XOR</h1>

                XOR is a Logic gate calculates to Bytes by the following logic.
                <h2>XOR Truth Table</h2>
                <table>
                    <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A XOR B</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    </tbody>
                </table>
                <p>
                    If we want to XOR two bytes we jet the first of both then the second of both and so on.<br/>
                    If we XOR 3 bits/bytes we XOR 1 and 2 and than with that 3. We can change the order of this operation as we want.
                </p>

                <p>
                    The XOR node goes through the given arrays and XORs with each corresponding element of the other inputted arrays.<br/>
                    In the case that the arrays have different lengths the length of the first input is used.
                </p>




            </div>
        </div>
    )


}

export default xor