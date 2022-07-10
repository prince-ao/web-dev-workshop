<script>
  import Header from '../components/header.svelte'
  let email = ""
  let subject = ""
  let message = ""
  const handleSubmit = () => {
    email = "";
    subject = "";
    message = "";
    window.alert("messsage has been sent")
  }
</script>

<Header />

<form on:submit|preventDefault={handleSubmit} style="display:flex;flex-direction:column;">
<label>
  Email:
  <input type="text" bind:value={email}>
</label>
<label>
  Subject:
  <input type="text" bind:value={subject}>
</label>
<label>
  Message:
  <input type="textarea" bind:value={message}>
</label>
<input type="submit">
</form>