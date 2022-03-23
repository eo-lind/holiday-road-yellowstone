export const bizarreHtmlRender = (obj) => {
  return `
    <div class="panel " id="id--${obj.id}" style="background-color:#EEEEAA;">
    <div class="title-div">
    <h2 class="panel-title>${obj.name}</h2>
    </div>
    <div class="text-box">
    <h3>${obj.city}, ${obj.state}</h3>
    <p>${obj.description}</p>
    <p>Restrooms? ${obj.ameneties.restrooms ? "Yes" : "No"}</p>
<button class="save-el">Save</button>
</div>
</div>
    `;
};