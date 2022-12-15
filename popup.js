'use strict';

//General
//Script for Current Focused element any keypress
document.getElementById('current-focused-element-any-keypress').addEventListener('click', activeCurrentFocused);

function activeCurrentFocused(event) {
  if (localStorage.getItem("current-focused-element-any-keypress") == 'true') {
    document.getElementById('current-focused-element-any-keypress').checked = true;
  }
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script current-focused" });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script current-focused" });
    });
    }
}

//Script for
document.getElementById('clone-element').addEventListener('click', activeCloneElement);
if (localStorage.getItem("clone-element") == 'true') {
  document.getElementById('clone-element').checked = true;
}
function activeCloneElement(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script clone-element" });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script clone-element" });
    });
    }
}

//Script for
document.getElementById('color-contrast-css-props').addEventListener('click', activeColorContrast);
if (localStorage.getItem("color-contrast-css-props") == 'true') {
  document.getElementById('color-contrast-css-props').checked = true;
}
function activeColorContrast(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script color-contrast" });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script color-contrast" });
    });
    }
}

//Script for 
document.getElementById('current-state').addEventListener('click', activeCurrentState);
if (localStorage.getItem("current-state") == 'true') {
  document.getElementById('current-state').checked = true;
}
function activeCurrentState(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script current-state" });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script current-state" });
    });
    }
}

//HTML
//Script for 
document.getElementById('heading-levels').addEventListener('click', activeHeadingLevels);
if (localStorage.getItem("heading-levels") == 'true') {
  document.getElementById('heading-levels').checked = true;
}
function activeHeadingLevels(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script heading-levels" });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script heading-levels" });
    });
    }
}

//Script for 
document.getElementById('br-finder').addEventListener('click', activeBrFinder);
if (localStorage.getItem("br-finder") == 'true') {
  document.getElementById('br-finder').checked = true;
}
function activeBrFinder(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script br-finder" });
    });
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script br-finder" });
  });
  }
}

//Script for 
document.getElementById('list-listitems').addEventListener('click', activeListListItems);
  if (localStorage.getItem("list-listitems") == 'true') {
    document.getElementById('list-listitems').checked = true;
  }
  function activeListListItems(event) {
    var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script list-listitems" });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script list-listitems" });
      });
    }
}

//Script for 
document.getElementById('live-regions').addEventListener('click', activeLiveRegions);
if (localStorage.getItem("live-regions") == 'true') {
  document.getElementById('live-regions').checked = true;
}
function activeLiveRegions(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script live-regions" });
    });
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script live-regions" });
    });
  }
}

//Script for 
document.getElementById('page-title').addEventListener('click', activePageTitle);
  if (localStorage.getItem("page-title") == 'true') {
    document.getElementById('page-title').checked = true;
  }
  function activePageTitle(event) {
    var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script page-title" });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script page-title" });
    });
    }
  }

//USBank
//Script-Mio
document.getElementById('btnScrpit1').addEventListener('click', activeScrpit1);
if (localStorage.getItem("btnScrpit1") == 'true') {
  document.getElementById('btnScrpit1').checked = true;
}

function activeScrpit1(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script 1" });
      });
      localStorage.setItem("btnScrpit1", true);
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script 1" });
      });
      localStorage.setItem("btnScrpit1", false);
    }
}
//Script for 
document.getElementById('bold-title-slash-separator').addEventListener('click', activeBoldTitle);
if (localStorage.getItem("bold-title-slash-separator") == 'true') {
  document.getElementById('bold-title-slash-separator').checked = true;
}
function activeBoldTitle(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script 1" });
      });
      localStorage.setItem("bold-title-slash-separator", true);
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script bold title slash separator" });
      });
      localStorage.setItem("bold-title-slash-separator", false);
    }
}

//UTest
//Script for
document.getElementById('bold-title-column-separator').addEventListener('click', activeBoldTitleColumn);
  if (localStorage.getItem("bold-title-column-separator") == 'true') {
    document.getElementById('bold-title-column-separator').checked = true;
  }
  function activeBoldTitleColumn(event) {
    var check = $(this)
      if (check.prop('checked') === true) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script bold-title-column-separator" });
        });
        localStorage.setItem("bold-title-column-separator", true);
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script bold-title-column-separator" });
        });
        localStorage.setItem("bold-title-column-separator", false);
      }
  }

//Script for
document.getElementById('BBVA-Scripts').addEventListener('click', activeBbvaScripts);
  if (localStorage.getItem("BBVA-Scripts") == 'true') {
    document.getElementById('BBVA-Scripts').checked = true;
  }
  function activeBbvaScripts(event) {
    var check = $(this)
      if (check.prop('checked') === true) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script BBVA-Scripts" });
        });
        localStorage.setItem("BBVA-Scripts", true);
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script BBVA-Scripts" });
        });
        localStorage.setItem("BBVA-Scripts", false);
      }
  }

//Script for
document.getElementById('display-unclaimed-tc').addEventListener('click', activeDisplayUnclaimed);
if (localStorage.getItem("display-unclaimed-tc") == 'true') {
  document.getElementById('display-unclaimed-tc').checked = true;
}
function activeDisplayUnclaimed(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script display-unclaimed-tc" });
      });
      localStorage.setItem("display-unclaimed-tc", true);
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script display-unclaimed-tc" });
      });
      localStorage.setItem("display-unclaimed-tc", false);
    }
}

//Script for
document.getElementById('tc-preview-format').addEventListener('click', activeTcPreviewFormat);
if (localStorage.getItem("tc-preview-format") == 'true') {
  document.getElementById('tc-preview-format').checked = true;
}
function activeTcPreviewFormat(event) {
  var check = $(this)
    if (check.prop('checked') === true) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script tc-preview-format" });
      });
      localStorage.setItem("tc-preview-format", true);
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script tc-preview-format" });
      });
      localStorage.setItem("tc-preview-format", false);
    }
}
//Script for
document.getElementById('mark-row-double-click').addEventListener('click', activeMarkRowDobleClick);
if (localStorage.getItem("mark-row-double-click") == 'true') {
  document.getElementById('mark-row-double-click').checked = true;
}
function activeMarkRowDobleClick(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script mark-row-double-click" });
    });
    localStorage.setItem("mark-row-double-click", true);
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script mark-row-double-click" });
    });
    localStorage.setItem("mark-row-double-click", false);
  }
}

//Script for
document.getElementById('delete-row-alt-click').addEventListener('click', activeDeleteRow);
if (localStorage.getItem("delete-row-alt-click") == 'true') {
  document.getElementById('delete-row-alt-click').checked = true;
}
function activeDeleteRow(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script delete-row-alt-click" });
    });
    localStorage.setItem("delete-row-alt-click", true);
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar script delete-row-alt-click" });
    });
    localStorage.setItem("delete-row-alt-click", false);
  }
}

//Script for Starbucks
document.getElementById('starbucks').addEventListener('click', activeStarbucks);
if (localStorage.getItem("starbucks") == 'true') {
  document.getElementById('starbucks').checked = true;
}

function activeStarbucks(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Starbucks" });
    });
    localStorage.setItem("starbucks", true);
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar Starbucks" });
    });
    localStorage.setItem("starbucks", false);
  }

}

//Script for Utest Only1
document.getElementById('utest-no-match-only1').addEventListener('click', activeUtestNoMatch);
if (localStorage.getItem("utest-no-match-only1") == 'true') {
  document.getElementById('utest-no-match-only1').checked = true;
}
function activeUtestNoMatch(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Utest no match only1" });
    });
    localStorage.setItem("utest-no-match-only1", true);
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar Utest no match only1" });
    });
    localStorage.setItem("utest-no-match-only1", false);
  }
}

//Script for Utest-View-Component
document.getElementById('utest-view-components1').addEventListener('click', activeUtestViewComponents);
if (localStorage.getItem("utest-view-components1") == 'true') {
  document.getElementById('utest-view-components1').checked = true;
}
function activeUtestViewComponents(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Utest view components" });
    });
    localStorage.setItem("utest-view-components1", true);
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar Utest view components" });
    });
    localStorage.setItem("utest-view-components1", false);
  }
}
//Script for Filter-Issues-Per-Slot
document.getElementById('filter-issues-per-slot').addEventListener('click', activeUtestFilterIssuesPerSlot);
if (localStorage.getItem("filter-issues-per-slot") == 'true') {
  document.getElementById('filter-issues-per-slot').checked = true;
}

function activeUtestFilterIssuesPerSlot(event) {
  var check = $(this)
  if (check.prop('checked') === true) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Filter issues per slot" });
    });
    localStorage.setItem("filter-issues-per-slot", true);
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Desactivar Filter issues per slot" });
    });
    localStorage.setItem("#filter-issues-per-slot", false);
  }
}