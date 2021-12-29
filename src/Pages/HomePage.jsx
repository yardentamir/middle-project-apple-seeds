import React from 'react';

export default function TeddyGamePage() {
  return (
    <div class="main-content w-100 p-5">
      <div class="create" data-view-active="true">
        <h1>CREATE</h1>
      </div>
      <div class="load" data-view-active="false">
        <h1>LOAD</h1>
      </div>
      <div class="settings" data-view-active="false">
        <h1>SETTINGS</h1>
      </div>
    </div>

  )
}