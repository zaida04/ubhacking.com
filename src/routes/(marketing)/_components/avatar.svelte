<script lang="ts">
  import LogOut from "lucide-svelte/icons/log-out";
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem,
  } from "../../../shared-components/dropdown";
  import { Button } from "../../../shared-components/button";
  import { Avatar, AvatarFallback } from "../../../shared-components/avatar";
  import { supabaseClientOnly } from "$lib/supabase-client";
</script>

<DropdownMenu preventScroll={false}>
  <DropdownMenuTrigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="ghost"
      class="relative h-8 w-8 rounded-full"
    >
      <Avatar>
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent class="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem
        class="hover:cursor-pointer"
        on:click={async () => {
          supabaseClientOnly.auth.signOut();
          window.location.reload();
        }}
      >
        <LogOut class="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
