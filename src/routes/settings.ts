export const settings = `
  <main class="main-setting">
    <h2 class="main-title">Game cards</h2>
    <form action="#" method="POST" class="form-card">
      <select name="card" id="select-card" class="select-card" requiared="">
        <option value="" disabled="" selected="">select game cards type</option>
        <option value="1">pets</option>
        <option value="2">nature</option>
        <option value="3">farm</option>
      </select>
    </form>
    <h2 class="main-title">Game cards</h2>
    <form action="#" method="POST" class="form-difficulty">
      <select 
        name="difficulty" 
        id="select-difficulty" 
        class="select-difficulty" 
        requiared=""
      >
        <option 
          value="" 
          disabled="" 
          selected="" 
          hidden
        >
          select game type
        </option>
        <option value="4">4x4</option>
        <option value="6">6x6</option>
        <option value="8">8x8</option>
      </select>
    </form>
  </main>
`;
